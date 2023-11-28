import dayjs, { Dayjs } from 'dayjs';
import { Cells, CurrentDay, DayWrapper, GridWrapper } from 'components/Calendar/Calendar.styles.ts';
import { FC } from 'react';

interface ICalendar {
  today: Dayjs;
}

export const Calendar: FC<ICalendar> = ({ today }) => {
  const totalDays = 42;

  const startDayOfWeek = today.clone().startOf('month').startOf('week');
  const daysArray = Array.from({ length: totalDays }, (_, index) =>
    startDayOfWeek.add(index, 'day'),
  );

  const isWeekend = (day: dayjs.Dayjs) => day.day() === 6 || day.day() === 0;
  const isCurrentDay = (day: dayjs.Dayjs) => day.isSame(dayjs(), 'day');

  return (
    <>
      <GridWrapper $isHeader>
        {[...Array(7)].map((_, i) => (
          <Cells $isHeader key={i}>
            {dayjs()
              .day(i + 1)
              .format('ddd')}
          </Cells>
        ))}
      </GridWrapper>
      <GridWrapper>
        {daysArray.map((dayItem) => (
          <Cells
            key={dayItem.format('DDMMYYYY')}
            $isWeekend={isWeekend(dayItem)}
            $isCurrentDay={isCurrentDay(dayItem)}>
            <DayWrapper>
              {isCurrentDay(dayItem) ? (
                <CurrentDay>{dayItem.format('D')}</CurrentDay>
              ) : (
                dayItem.format('D')
              )}
            </DayWrapper>
          </Cells>
        ))}
      </GridWrapper>
    </>
  );
};
