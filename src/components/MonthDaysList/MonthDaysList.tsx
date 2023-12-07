import {
  Cells,
  CurrentDay,
  DayWrapper,
  EventItemWrapper,
  EventListWrapper,
} from './MonthDaysList.styles.ts';
import {
  isCurrentDay,
  isCurrentMonth,
  isDayContainCurrentEvent,
  isWeekend,
} from 'helpers/calendarDateCalculations.ts';
import { truncateText } from 'helpers/truncateText.ts';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';
import { IEvent } from 'types/types.ts';
import { FC } from 'react';
import {
  setEvent,
  setEvents,
  setMethod,
  setModalActive,
} from 'store/slices/calendarSlice.ts';

export const MonthDaysList: FC = () => {
  const { selectedDate, events } = useAppSelector(state => state.calendar);

  const totalDays = 42;

  const startDayOfWeek = selectedDate.clone().startOf('month').startOf('week');

  const daysArray = Array.from({ length: totalDays }, (_, index) =>
    startDayOfWeek.add(index, 'day'),
  );

  const dispatch = useAppDispatch();

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
