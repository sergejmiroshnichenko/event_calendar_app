import dayjs from 'dayjs';
import 'dayjs/locale/en-gb.js';
import {
  Cells,
  CurrentDay,
  DayWrapper,
  EventItemWrapper,
  EventListWrapper,
  GridWrapper,
} from './Calendar.styles.ts';
import { FC } from 'react';
import { truncateText } from 'helpers/truncateText.ts';
import {
  isCurrentDay,
  isCurrentMonth,
  isWeekend,
} from 'helpers/calendarDateCalculations.ts';
import { useAppSelector } from 'hooks/redux-hooks.ts';
import { CalendarHeader } from 'components/CalendarHeader/CalendarHeader.tsx';
import { IEvent } from 'types/types.ts';

interface ICalendar {
  events: IEvent[];
  openFormHandler: (methodName: string, eventForHandler: IEvent) => void;
}

export const Calendar: FC<ICalendar> = ({ events, openFormHandler }) => {
  const totalDays = 42;
  dayjs.locale('en-gb');

  const { selectedDate } = useAppSelector(state => state.calendar);

  const startDayOfWeek = selectedDate.clone().startOf('month').startOf('week');
  const daysArray = Array.from({ length: totalDays }, (_, index) =>
    startDayOfWeek.add(index, 'day'),
  );

  return (
    <>
      <GridWrapper $isHeader>
        <CalendarHeader />
      </GridWrapper>
      <GridWrapper>
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
                .filter(
                  event =>
                    dayjs(event.date).unix() >= dayItem.unix() &&
                    dayjs(event.date).unix() <= dayItem.clone().endOf('day').unix(),
                )
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
      </GridWrapper>
    </>
  );
};
