import {
  ActionButtonsWrapper,
  EventDate,
  EventDescription,
  EventDescriptionWrapper,
  EventHours,
  EventStatus,
  EventTime,
  EventTitle,
  EventTitleWrapper,
  TitleError,
  UpdateIcon,
} from './FormEvent.styles.ts';
import Update from 'assets/update.svg';
import Remove from 'assets/remove1.svg';
import {
  resetForm,
  setEvent,
  setEvents,
  setMethod,
  setModalActive,
} from 'store/slices/calendarSlice.ts';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { getRandomColor } from 'helpers/getRandomColor.ts';
import { IEvent } from 'types/types.ts';

export const FormEvent = () => {
  const dispatch = useAppDispatch();

  const { method, event, events } = useAppSelector(state => state.calendar);

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

  const removeEvent = () => {
    const result = events.filter(eventEl => eventEl.id !== event.id);
    dispatch(setEvents(result));
    localStorage.setItem('events', JSON.stringify(result));
    dispatch(setModalActive(false));
  };

  return (
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
          onChange={({ target }) => eventChangeHandler(target.value, 'description')}
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
  );
};
