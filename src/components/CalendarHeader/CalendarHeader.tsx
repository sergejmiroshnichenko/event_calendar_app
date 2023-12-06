import { Cells } from 'components/Calendar/Calendar.styles.ts';
import dayjs from 'dayjs';

export const CalendarHeader = () => {
  return (
    <>
      {[...Array(7)].map((_, i) => (
        <Cells $isHeader key={i} $isCurrentMonth>
          {dayjs()
            .day(i + 1)
            .format('ddd')}
        </Cells>
      ))}
    </>
  );
};
