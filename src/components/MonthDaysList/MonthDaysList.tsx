import {
  Cells,
  CurrentDay,
  DayWrapper,
  EventItemWrapper,
  EventListWrapper,
} from './MonthDaysList.styles.ts';
import {
  getParsedStoredDate,
  isCurrentDay,
  isCurrentMonth,
  isDayContainCurrentEvent,
  isWeekend,
} from 'helpers/calendarDateCalc.ts';
import { truncateText } from 'helpers/truncateText.ts';
import dayjs, { Dayjs } from 'dayjs';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';
import { IEvent } from 'types/types.ts';
import { FC, useEffect, useState } from 'react';
import {
  setEvent,
  setEvents,
  setMethod,
  setModalActive,
} from 'store/slices/calendarSlice.ts';

export const MonthDaysList: FC = () => {
  const [daysArray, setDaysArray] = useState<Dayjs[]>([]);

  const { selectedDate, events } = useAppSelector(state => state.calendar);

  const dispatch = useAppDispatch();

  const totalDays = 42;

  const parsedStoredDate = getParsedStoredDate();

  useEffect(() => {
    const startDayOfWeek = parsedStoredDate.clone().startOf('month').startOf('week');

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
        <Cells
          key={dayItem.unix()}
          $isWeekend={isWeekend(dayItem)}
          $isCurrentDay={isCurrentDay(dayItem)}
          $isCurrentMonth={isCurrentMonth(dayItem, dayjs())}>
          <DayWrapper>
            {isCurrentDay(dayItem) ? (
              <CurrentDay>{dayItem.format('D')}</CurrentDay>
            ) : (
              dayItem.format('D')
            )}
          </DayWrapper>
          <EventListWrapper>
            {events
              .filter(event => isDayContainCurrentEvent(event, dayItem))
              .map(event => (
                <li key={event.id}>
                  <EventItemWrapper
                    $bg={event.background}
                    onClick={() => openFormHandler('Update', event)}>
                    {truncateText(event.title, 22)}
                  </EventItemWrapper>
                </li>
              ))}
          </EventListWrapper>
        </Cells>
      ))}
    </>
  );
};
