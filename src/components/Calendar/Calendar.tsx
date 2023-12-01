import dayjs, { Dayjs } from 'dayjs';
import {
  Cells,
  CurrentDay,
  DayWrapper,
  EventItemWrapper,
  EventListWrapper,
  GridWrapper,
} from 'components/Calendar/Calendar.styles.ts';
import { FC } from 'react';
import { truncateText } from 'services/truncateText.ts';

interface ICalendar {
  today: Dayjs;
  events: Record<string, string>[];
  openFormHandler: (methodName: string, eventForHandler: Record<string, string>) => void;
}

export const Calendar: FC<ICalendar> = ({ today, events, openFormHandler }) => {
  const totalDays = 42;

  const startDayOfWeek = today.clone().startOf('month').startOf('week');
  const daysArray = Array.from({ length: totalDays }, (_, index) =>
    startDayOfWeek.add(index, 'day'),
  );

  const isWeekend = (day: dayjs.Dayjs) => day.day() === 6 || day.day() === 0;

  const isCurrentDay = (day: dayjs.Dayjs) => day.isSame(dayjs(), 'day');

  const isCurrentMonth = (day: dayjs.Dayjs) => today.isSame(day, 'month');

  return (
    <>
      <GridWrapper $isHeader>
        {[...Array(7)].map((_, i) => (
          <Cells $isHeader key={i} $isCurrentMonth>
            {dayjs()
              .day(i + 1)
              .format('ddd')}
          </Cells>
        ))}
      </GridWrapper>
      <GridWrapper>
        {daysArray.map(dayItem => (
          <Cells
            key={dayItem.unix()}
            $isWeekend={isWeekend(dayItem)}
            $isCurrentDay={isCurrentDay(dayItem)}
            $isCurrentMonth={isCurrentMonth(dayItem)}>
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
