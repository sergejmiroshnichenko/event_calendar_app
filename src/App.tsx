import './App.css';
import dayjs from 'dayjs';
import 'dayjs/locale/de.js';
import { Calendar } from 'components/Calendar/Calendar.tsx';
import { Stack, styled } from '@mui/material';
import Header from 'components/Header/Header.tsx';

// import { useState } from 'react';

const StackStyled = styled(Stack)`
  margin: 0 auto;
  max-width: 968px;
  box-shadow:
    0 0 0 1px #b7caf3,
    0 8px 20px 6px #888;
  border-radius: 7px;
`;

function App() {
  dayjs.locale('de');

  // const startDayOfWeek = dayjs().startOf('month').startOf('week');
  // const endDayOfWeek = dayjs().endOf('month').endOf('week');
  // console.log('startDayOfWeek', startDayOfWeek.format('YYYY-MM-DD'));
  // console.log('endDayOfWeek', endDayOfWeek);

  // console.log(navigator.language, navigator.languages);

  // const currentDate = new Date()
  //
  // const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
  //
  // console.log('firstDayOfMonth', firstDayOfMonth);
  //
  // const dayNumberOfWeek = firstDayOfMonth.getDay();
  // console.log('dayOfWeek', dayNumberOfWeek);

  // const [currentMonth, setCurrentMonth] = useState(new Date());
  //
  // const prevMonth = () => {
  //   setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  // };
  //
  // const nextMonth = () => {
  //   setCurrentMonth((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  // };
  //
  // const daysInMonth = () => {
  //   const year = currentMonth.getFullYear();
  //   const month = currentMonth.getMonth();
  //   return new Date(year, month + 1, 0).getDate();
  // };
  //
  // const renderCalendar = () => {
  //   const days = [];
  //   const totalDays = daysInMonth();
  //
  //   for (let i = 1; i <= totalDays; i++) {
  //     days.push(<div key={i}>{i}</div>);
  //   }
  //
  //   return days;
  // };
  //
  // console.log(prevMonth, 'prevMonth');

  return (
    <StackStyled>
      <Header />
      <Calendar />
    </StackStyled>
  );
}

export default App;
