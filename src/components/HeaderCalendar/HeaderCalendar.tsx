import { styled } from 'styled-components';
import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';
import { setSelectedDate } from 'store/slices/calendarSlice.ts';
import dayjs from 'dayjs';
import { Picker } from 'components/DatePicker_/Picker.tsx';

const ButtonWrapper = styled.button`
  border: unset;
  height: 20px;
  font-weight: bold;
  border-radius: 4px;
  background: transparent;
  display: flex;
  align-items: center;
  outline: unset;
  padding: 0;
  margin: 0;
`;

const ButtonCreate = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  box-shadow:
    rgba(0, 0, 0, 0.08) 0 0 0 1px,
    rgba(0, 0, 0, 0.3) 0 4px 4px 0;
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding: 0;
  background: #00b0ff;
  color: white;
`;

const HeaderWrapper = styled('header')`
  background: #efebe9;
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-start-start-radius: 7px;
  border-start-end-radius: 7px;
`;

const CurrentMonthButton = styled(ButtonWrapper)`
  padding: 0 8px;
`;

interface HeaderProps {
  setModalActive: (active: boolean) => void;
  // openCreate: (methodName: string) => void;
  // method: string;
}

export const HeaderCalendar: FC<HeaderProps> = ({
  setModalActive,
  // openCreate,
  // method,
}) => {
  // const startDayOfWeek = today.clone().startOf('month').format('MMMM YYYY');

  console.log('year', dayjs());

  const { selectedDate } = useAppSelector(state => state.calendar);

  console.log('selectedDateHeader', selectedDate);

  console.log('selectedDate', selectedDate);

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
          setModalActive(true);
          // openCreate('Create');
        }}>
        {/*{method}*/}+
      </ButtonCreate>
      <ButtonWrapper onClick={prevMonthHandler}>&#60;</ButtonWrapper>
      <CurrentMonthButton onClick={currentMonthHandler}>
        {selectedDate.format('MMMM YYYY')}
      </CurrentMonthButton>
      <ButtonWrapper onClick={nextMonthHandler}>&#62;</ButtonWrapper>
      {/*<DatePickerComponent />*/}
      <Picker />
    </HeaderWrapper>
  );
};
