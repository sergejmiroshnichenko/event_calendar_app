import {
  ButtonCreate,
  ButtonNavigation,
  DateContainer,
  HeaderWrapper,
  NavigationContainer,
  NavigationWrapper,
  TodayButton,
} from './CalendarNavigation.styles.ts';
import { FC } from 'react';
import { useAppDispatch } from 'hooks/redux-hooks.ts';
import { setModalActive, setSelectedDate } from 'store/slices/calendarSlice.ts';
import dayjs from 'dayjs';
import { DatePicker } from 'components/DatePicker/DatePicker.tsx';
import { getParsedStoredDate, getStoredSelectedDate } from 'helpers/calendarDateCalc.ts';

interface HeaderProps {
  // openCreate: (methodName: string) => void;
  // method: string;
}

export const CalendarNavigation: FC<HeaderProps> = () =>
// openCreate,
// method,
{
  const dispatch = useAppDispatch();

  const storedSelectedDate = getStoredSelectedDate();
  const parsedStoredDate = getParsedStoredDate();

  const handleMonthSwitching = (stepMonth: number) => {
    dispatch(setSelectedDate(parsedStoredDate.add(stepMonth, 'month')));
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
        {/*{method}*/}
        <i className="fas fa-plus"></i>
      </ButtonCreate>

      <NavigationContainer>
        <TodayButton
          disabled={dayjs().format('MMMM YYYY') === storedSelectedDate}
          onClick={currentMonthHandler}>
            Today
        </TodayButton>
        <NavigationWrapper>
          <ButtonNavigation onClick={() => handleMonthSwitching(-1)}>
            <i className="fas fa-angle-left"></i>
          </ButtonNavigation>

          <DateContainer>
            <h3>{storedSelectedDate || dayjs().format('MMMM YYYY')}</h3>
          </DateContainer>

          <ButtonNavigation onClick={() => handleMonthSwitching(1)}>
            <i className="fas fa-angle-right"></i>
          </ButtonNavigation>
        </NavigationWrapper>

        <DatePicker />
      </NavigationContainer>
    </HeaderWrapper>
  );
};
