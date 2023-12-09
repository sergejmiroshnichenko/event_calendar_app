import { FC } from 'react';
import { useAppDispatch } from 'hooks/redux-hooks.ts';
import { setModalActive, setSelectedDate } from 'store/slices/calendarSlice.ts';
import dayjs from 'dayjs';
import { DatePicker } from 'components/DatePicker/DatePicker.tsx';
import {
  ButtonCreate,
  ButtonNavigation,
  CurrentMonthButton,
  HeaderWrapper,
} from './CalendarNavigation.styles.ts';

interface HeaderProps {
  // openCreate: (methodName: string) => void;
  // method: string;
}

export const CalendarNavigation: FC<HeaderProps> = () =>
// openCreate,
// method,
{
  const dispatch = useAppDispatch();

  const storedSelectedDate = localStorage.getItem('selectedDate'); // December 2023

  const parsedStoredDate = storedSelectedDate
    ? dayjs(`${storedSelectedDate} 1`, 'MMMM D YYYY') // Dec 01 2023
    : dayjs();

  const prevMonthHandler = () => {
    dispatch(setSelectedDate(parsedStoredDate.subtract(1, 'month')));
  };

  const nextMonthHandler = () => {
    dispatch(setSelectedDate(parsedStoredDate.add(1, 'month')));
  };

  const currentMonthHandler = () => {
    dispatch(setSelectedDate(dayjs()));
  };

  return (
    <HeaderWrapper>
      <ButtonCreate
        onClick={() => {
          dispatch(setModalActive(true));
          // openCreate('Create');
        }}>
        {/*{method}*/}+
      </ButtonCreate>
      <ButtonNavigation onClick={prevMonthHandler}>
        <i className="fas fa-angle-left"></i>
      </ButtonNavigation>
      <CurrentMonthButton onClick={currentMonthHandler}>
        {storedSelectedDate || dayjs().format('MMMM YYYY')}
      </CurrentMonthButton>
      <ButtonNavigation onClick={nextMonthHandler}>
        <i id="right" className="fas fa-angle-right"></i>
      </ButtonNavigation>
      <DatePicker />
    </HeaderWrapper>
  );
};
