import { Cell } from 'components/CalendarCell/CalendarCell.styles.ts';
import dayjs from 'dayjs';

export const CalendarHeader = () => {
  return (
    <>
      {[...Array(7)].map((_, i) => (
        <Cell $isHeader key={i} $isCurrentMonth>
          {dayjs()
            .day(i + 1)
            .format('ddd')}
        </Cell>
      ))}
    </>
  );
};
