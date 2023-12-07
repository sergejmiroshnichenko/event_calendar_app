import dayjs from 'dayjs';
import 'dayjs/locale/en-gb.js';
import { Calendar } from 'components/Calendar/Calendar.tsx';
import { Stack, styled } from '@mui/material';
import { CalendarNavigation } from 'components/CalendarNavigation/CalendarNavigation.tsx';
import { useEffect, useState } from 'react';
import { Modal } from 'components/Modal/Modal.tsx';
import { getRandomColor } from 'helpers/getRandomColor.ts';
import Update from 'assets/update.svg';
import Remove from 'assets/remove1.svg';
import theme from 'styles/theme.ts';
import { IEvent } from 'types/types.ts';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';
import {
  resetForm,
  setEvent,
  setEvents,
  setMethod,
  setModalActive,
} from 'store/slices/calendarSlice.ts';

const StackStyled = styled(Stack)`
  margin: 50px auto;
  max-width: 968px;
  box-shadow: ${theme.shadows.primary};
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
  margin: 40px 0 5px;
  width: 100%;
`;

const TitleError = styled('span')`
  color: ${theme.colors.error};
  position: absolute;
  left: 0;
  bottom: -20%;
`;

const EventDescription = styled('textarea')`
  ${inputStyles};
  resize: none;
  width: 100%;
  margin: 13% 0;
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

const EventTitleWrapper = styled('div')`
  position: relative;
`;

const UpdateIcon = styled('img')`
  position: absolute;
  right: 0;
  top: 0;
`;

const EventStatus = styled('span')`
  color: #9e9e9e;
  font-size: 0.85rem;
  font-style: italic;
`;

const ActionButtonsWrapper = styled('div')`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  gap: 15px;
`;

function App() {
  dayjs.locale('en-gb');

  // const startDayOfWeek = dayjs().startOf('month').startOf('week');
  // const endDayOfWeek = dayjs().endOf('month').endOf('week');
  // console.log('startDayOfWeek', startDayOfWeek.format('YYYY-MM-DD'));
  // console.log('endDayOfWeek', endDayOfWeek);

  const dispatch = useAppDispatch();

  const { event, events, method, modalActive } = useAppSelector(
    state => state.calendar,
  );

  // const [modalActive, setModalActive] = useState(false);

  const [titleError, setTitleError] = useState('');

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const isTitleDuplicate = events.some(eventEl => eventEl.title === event.title);

    if (!event.title || titleError || isTitleDuplicate) {
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  }, [event.title, events, titleError]);

  const addEvent = () => {
    const currentTime = dayjs().format('DD.MM.YYYY HH:mm');
    const eventIndex = events.findIndex(eventElem => eventElem.id === event.id);

    if (eventIndex === -1) {
      const newEvent = {
        ...event,
        id: String(events.length + 1),
        background: getRandomColor(),
        createdAt: currentTime,
        lastUpdatedTime: null,
      };
      localStorage.setItem('events', JSON.stringify([...events, newEvent]));
      dispatch(setEvents([...events, newEvent]));
    } else {
      const updatedEvents = structuredClone(events);
      updatedEvents[eventIndex] = { ...event, lastUpdatedTime: currentTime };
      dispatch(setEvents(updatedEvents));
      localStorage.setItem('events', JSON.stringify(updatedEvents));
    }
  };

  // const openFormHandler = (methodName: string, eventForEdit: IEvent) => {
  //   setMethod(methodName);
  //   setModalActive(true);
  //   dispatch(setEvent(eventForEdit));
  //
  //   const updatedEvent = events.map(eventEl =>
  //     eventEl.id === eventForEdit.id ? eventForEdit : eventEl,
  //   );
  //   dispatch(setEvents(updatedEvent));
  // };

  const eventChangeHandler = (text: string, field: string) => {
    const partialEvent: Partial<IEvent> = { [field]: text };
    const event: IEvent = partialEvent as IEvent;
    dispatch(setEvent(event));

    if (field === 'title' && !text) {
      setTitleError('title can\'t be empty');
    } else {
      setTitleError('');
    }
  };

  const removeEvent = e => {
    e.preventDefault();
    const result = events.filter(eventEl => eventEl.id !== event.id);
    dispatch(setEvents(result));
    localStorage.setItem('events', JSON.stringify(result));
    dispatch(setModalActive(false));
  };

  return (
    <>
      <StackStyled>
        <CalendarNavigation
        // openCreate={openCreate}
        // method={method}
        />
        <Calendar />
      </StackStyled>

      <Modal title={method === 'Update' ? 'Edit idea item' : 'Add new idea item'}>
        {modalActive && (
          <form>
            {method === 'Update' && (
              <EventStatus>
                {event.lastUpdatedTime
                  ? `Updated at ${event.lastUpdatedTime}`
                  : `Created at ${event.createdAt}`}
              </EventStatus>
            )}
            <EventTitleWrapper>
              <EventTitle
                type="text"
                placeholder={'Title goes here'}
                required
                value={event.title}
                onChange={({ target }) => eventChangeHandler(target.value, 'title')}
              />
              {titleError && <TitleError>{titleError}</TitleError>}
            </EventTitleWrapper>
            <EventDescriptionWrapper>
              <EventDescription
                placeholder={'Description'}
                value={event.description}
                onChange={({ target }) =>
                  eventChangeHandler(target.value, 'description')
                }
              />
              {method === 'Update' && <UpdateIcon src={Update} alt="update icon" />}
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
              value={event.time}
              placeholder={'Begin time'}
              onChange={({ target }) => eventChangeHandler(target.value, 'time')}
            />
            <EventHours>🕒</EventHours>

            <ActionButtonsWrapper>
              {method === 'Update' && (
                <button onClick={removeEvent}>
                  <img src={Remove} alt="remove icon" />
                </button>
              )}

              <button
                disabled={!isFormValid}
                onClick={e => {
                  e.preventDefault();
                  addEvent();
                  dispatch(setModalActive(false));
                  dispatch(resetForm());
                  dispatch(setMethod(''));
                }}>
                SAVE
              </button>
            </ActionButtonsWrapper>
          </form>
        )}
      </Modal>
    </>
  );
}

export default App;
