import dayjs from 'dayjs';
import 'dayjs/locale/en-gb.js';
import { GridWrapper } from './Calendar.styles.ts';
import { FC } from 'react';
import { CalendarHeader } from 'components/CalendarHeader/CalendarHeader.tsx';
import { MonthDaysList } from 'components/MonthDaysList/MonthDaysList.tsx';

export const Calendar: FC = () => {
  dayjs.locale('en-gb');

  return (
    <>
      <GridWrapper $isHeader>
        <CalendarHeader />
      </GridWrapper>
      <GridWrapper>
        <MonthDaysList />
      </GridWrapper>
    </>
  );
};
