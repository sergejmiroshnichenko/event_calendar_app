import './App.css';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb.js';
import { Calendar } from 'components/Calendar/Calendar.tsx';
import { Stack, styled } from '@mui/material';
import { Header } from 'components/Header/Header.tsx';
import { useState } from 'react';
import { Modal } from 'components/Modal/Modal.tsx';

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
  margin: 10% 0;
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

function App() {
  dayjs.locale('en-gb');

  // const startDayOfWeek = dayjs().startOf('month').startOf('week');
  // const endDayOfWeek = dayjs().endOf('month').endOf('week');
  // console.log('startDayOfWeek', startDayOfWeek.format('YYYY-MM-DD'));
  // console.log('endDayOfWeek', endDayOfWeek);

  const [today, setToday] = useState(dayjs());

  const [modalActive, setModalActive] = useState(false);

  const [eventDate, setEventDate] = useState({
    title: '',
    description: '',
    date: dayjs().format('YYYY-MM-DD'),
    time: '',
  });

  const [events, setEvents] = useState<Record<string, string>[]>([]);

  console.log('events', events);
  console.log('eventDate', dayjs(eventDate.date).unix());

  const prevMonthHandler = () => {
    setToday((prev) => prev.subtract(1, 'month'));
  };
  const nextMonthHandler = () => {
    setToday((prev) => prev.add(1, 'month'));
  };
  const currentMonthHandler = () => {
    setToday(dayjs());
  };

  const eventChangeHandler = (text: string, field: string) => {
    setEventDate((prevState) => ({
      ...prevState,
      [field]: text,
    }));
  };

  const resetForm = () => {
    setEventDate({
      title: '',
      description: '',
      date: dayjs().format('YYYY-MM-DD'),
      time: '',
    });
  };

  const addEvent = () => {
    const newEvent = {
      ...eventDate,
      id: String(events.length + 1),
    };
    setEvents((prevEvents) => [...prevEvents, newEvent]);
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
        <Calendar today={today} events={events} />
      </StackStyled>
      {modalActive ? (
        <Modal active={modalActive} setActive={setModalActive} title={'Add new idea item'}>
          <form>
            <EventTitle
              type="text"
              placeholder={'Title goes here'}
              required
              value={eventDate.title}
              onChange={({ target }) => eventChangeHandler(target.value, 'title')}
            />
            <EventDescription
              placeholder={'Description'}
              value={eventDate.description}
              onChange={({ target }) => eventChangeHandler(target.value, 'description')}
            />
            <EventDate
              type="date"
              placeholder={'Date'}
              required
              value={eventDate.date}
              onChange={({ target }) => eventChangeHandler(target.value, 'date')}
            />
            <EventTime type="time" placeholder={'Begin time'} />
            <EventHours>🕒</EventHours>
            <button
              onClick={(e) => {
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
