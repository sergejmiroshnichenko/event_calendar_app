import {
  getParsedStoredDate,
  isDayContainCurrentEvent,
} from 'helpers/calendarDateCalc.ts';
import { Dayjs } from 'dayjs';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';
import { IEvent } from 'types/types.ts';
import { FC, useEffect, useState } from 'react';
import {
  setEvent,
  setEvents,
  setMethod,
  setModalActive,
} from 'store/slices/calendarSlice.ts';
import { CalendarCell } from 'components/CalendarCell/CalendarCell.tsx';

export const MonthDaysList: FC = () => {
  const [daysArray, setDaysArray] = useState<Dayjs[]>([]);

  const { selectedDate, events } = useAppSelector(state => state.calendar);

  const dispatch = useAppDispatch();

  const totalDays = 42;

  const parsedStoredDate = getParsedStoredDate();

  useEffect(() => {
    const startDayOfWeek = parsedStoredDate
      .clone()
      .startOf('month')
      .startOf('week');

    const newValue = Array.from({ length: totalDays }, (_, index) =>
      startDayOfWeek.add(index, 'day'),
    );

    setDaysArray(newValue);
  }, [selectedDate]);

  const openFormHandler = (methodName: string, eventForEdit: IEvent) => {
    dispatch(setMethod(methodName));
    dispatch(setModalActive(true));
    dispatch(setEvent(eventForEdit));

    const updatedEvent = events.map(eventEl =>
      eventEl.id === eventForEdit.id ? eventForEdit : eventEl,
    );
    dispatch(setEvents(updatedEvent));
  };

  return (
    <>
      {daysArray.map(dayItem => (
        <CalendarCell
          key={dayItem.unix()}
          dayItem={dayItem}
          openFormHandler={openFormHandler}
          events={events.filter(event =>
            isDayContainCurrentEvent(event, dayItem),
          )}
        />
      ))}
    </>
  );
};
