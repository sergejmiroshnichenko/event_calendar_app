import './App.css';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb.js';
import { Calendar } from 'components/Calendar/Calendar.tsx';
import { Stack, styled } from '@mui/material';
import { Header } from 'components/Header/Header.tsx';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal.tsx';
import { getRandomColor } from 'services/getRandomColor.ts';
import Update from 'assets/update.svg';

const StackStyled = styled(Stack)`
  margin: 50px auto;
  max-width: 968px;
  box-shadow:
    0 0 0 1px #b7caf3,
    0 8px 20px 6px #888;
  border-radius: 7px;
`;

const inputStyles = `
  padding: 4px 14px;
  font-size: 0.85rem;
  width: 100%;
  border: unset;
  color: black;
  outline: unset;
  border-bottom: 2px solid #e3e3e3;
  letter-spacing: 0.05em;
`;

const EventTitle = styled('input')`
  ${inputStyles};
  margin: 20px 0;
  width: 100%;
`;

const EventDescription = styled('textarea')`
  ${inputStyles};
  resize: none;
  width: 100%;
  margin: 15% 0;
`;

const EventDate = styled('input')`
  ${inputStyles};
  width: 55%;
  position: relative;
`;
const EventTime = styled('input')`
  ${inputStyles};
  width: 30%;
  margin-left: 15%;
`;

const EventHours = styled('span')`
  position: absolute;
  right: 5%;
  margin-left: 10%;
`;

const EventDescriptionWrapper = styled('div')`
  position: relative;
`;

const UpdateIcon = styled('img')`
  position: absolute;
  right: 0;
  top: 0;
`;

function App() {
  dayjs.locale('en-gb');

  // const startDayOfWeek = dayjs().startOf('month').startOf('week');
  // const endDayOfWeek = dayjs().endOf('month').endOf('week');
  // console.log('startDayOfWeek', startDayOfWeek.format('YYYY-MM-DD'));
  // console.log('endDayOfWeek', endDayOfWeek);

  const [today, setToday] = useState(dayjs());

  const [modalActive, setModalActive] = useState(false);

  const [events, setEvents] = useState<Record<string, string>[]>(() => {
    const storedEvents = localStorage.getItem('events');
    return storedEvents ? JSON.parse(storedEvents) : [];
  });

  const [event, setEvent] = useState<Record<string, string>>({
    title: '',
    description: '',
    date: dayjs().format('YYYY-MM-DD'),
    time: '',
  });

  console.log(event);

  const prevMonthHandler = () => {
    setToday(prev => prev.subtract(1, 'month'));
  };
  const nextMonthHandler = () => {
    setToday(prev => prev.add(1, 'month'));
  };
  const currentMonthHandler = () => {
    setToday(dayjs());
  };

  const resetForm = () => {
    setEvent({
      title: '',
      description: '',
      date: dayjs().format('YYYY-MM-DD'),
      time: '',
    });
  };

  const addEvent = () => {
    const newEvent = {
      ...event,
      id: String(events.length + 1),
      background: getRandomColor(),
    };
    localStorage.setItem('events', JSON.stringify([...events, newEvent]));
    setEvents(prevEvents => [...prevEvents, newEvent]);
  };

  const openFormHandler = (methodName: string, eventForEdit: Record<string, string>) => {
    console.log(methodName);
    setModalActive(true);
    setEvent(eventForEdit);
  };

  const eventChangeHandler = (text: string, field: string) => {
    setEvent(prevState => ({
      ...prevState,
      [field]: text,
    }));
    // localStorage change too
  };

  const removeEvent = e => {
    e.preventDefault();
    const result = events.filter(eventEl => eventEl.id !== event.id);
    setEvents(result);
    localStorage.setItem('events', JSON.stringify(result));
    setModalActive(false);
  };

  return (
    <>
      <StackStyled>
        <Header
          today={today}
          setModalActive={setModalActive}
          prevMonthHandler={prevMonthHandler}
          nextMonthHandler={nextMonthHandler}
          currentMonthHandler={currentMonthHandler}
        />
        <Calendar today={today} events={events} openFormHandler={openFormHandler} />
      </StackStyled>
      {modalActive ? (
        <Modal
          active={modalActive}
          setActive={setModalActive}
          title={'Add new idea item'}
          resetForm={resetForm}>
          <form>
            <EventTitle
              type="text"
              placeholder={'Title goes here'}
              required
              value={event.title}
              onChange={({ target }) => eventChangeHandler(target.value, 'title')}
            />
            <EventDescriptionWrapper>
              <EventDescription
                placeholder={'Description'}
                value={event.description}
                onChange={({ target }) => eventChangeHandler(target.value, 'description')}
              />
              <UpdateIcon src={Update} alt="update icon" />
            </EventDescriptionWrapper>
            <EventDate
              type="date"
              placeholder={'Date'}
              required
              value={event.date}
              onChange={({ target }) => eventChangeHandler(target.value, 'date')}
            />
            <EventTime
              type="time"
              placeholder={'Begin time'}
              onChange={({ target }) => eventChangeHandler(target.value, 'time')}
            />
            <EventHours>🕒</EventHours>

            <button onClick={removeEvent}>УДАЛИТь</button>

            <button
              onClick={e => {
                e.preventDefault();
                setModalActive(false);
                addEvent();
                resetForm();
              }}>
              Save
            </button>
          </form>
        </Modal>
      ) : null}
    </>
  );
}

export default App;
