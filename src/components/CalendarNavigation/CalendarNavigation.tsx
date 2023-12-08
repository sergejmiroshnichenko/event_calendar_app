import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';
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
  // const startDayOfWeek = today.clone().startOf('month').format('MMMM YYYY');

  const { selectedDate } = useAppSelector(state => state.calendar);

  const dispatch = useAppDispatch();

  const prevMonthHandler = () => {
    dispatch(setSelectedDate(selectedDate.subtract(1, 'month')));
  };

  const nextMonthHandler = () => {
    dispatch(setSelectedDate(selectedDate.add(1, 'month')));
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
        {localStorage.getItem('selectedDate') || dayjs().format('MMMM YYYY')}
      </CurrentMonthButton>
      <ButtonNavigation onClick={nextMonthHandler}>
        <i id="right" className="fas fa-angle-right"></i>
      </ButtonNavigation>
      <DatePicker />
    </HeaderWrapper>
  );
};
