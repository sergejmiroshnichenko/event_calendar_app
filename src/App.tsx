import './App.css';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb.js';
import { Calendar } from 'components/Calendar/Calendar.tsx';
import { Stack, styled } from '@mui/material';
import { Header } from 'components/Header/Header.tsx';
import { useState } from 'react';

const StackStyled = styled(Stack)`
  margin: 50px auto;
  max-width: 968px;
  box-shadow:
    0 0 0 1px #b7caf3,
    0 8px 20px 6px #888;
  border-radius: 7px;
`;

function App() {
  dayjs.locale('en-gb');

  // const startDayOfWeek = dayjs().startOf('month').startOf('week');
  // const endDayOfWeek = dayjs().endOf('month').endOf('week');
  // console.log('startDayOfWeek', startDayOfWeek.format('YYYY-MM-DD'));
  // console.log('endDayOfWeek', endDayOfWeek);

  const [today, setToday] = useState(dayjs());

  const prevMonthHandler = () => {
    setToday((prev) => prev.subtract(1, 'month'));
  };
  const nextMonthHandler = () => {
    setToday((prev) => prev.add(1, 'month'));
  };
  const currentMonthHandler = () => {
    setToday(dayjs());
  };

  return (
    <StackStyled>
      <Header
        today={today}
        prevMonthHandler={prevMonthHandler}
        nextMonthHandler={nextMonthHandler}
        currentMonthHandler={currentMonthHandler}
      />
      <Calendar today={today} />
    </StackStyled>
  );
}

export default App;
