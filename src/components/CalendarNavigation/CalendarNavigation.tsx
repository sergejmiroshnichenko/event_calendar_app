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
import {
  setMethod,
  setModalActive,
  setSelectedDate,
} from 'store/slices/calendarSlice.ts';
import dayjs from 'dayjs';
import { DatePicker } from 'components/DatePicker/DatePicker.tsx';
import { getParsedStoredDate, getStoredSelectedDate } from 'helpers/calendarDateCalc.ts';

export const CalendarNavigation: FC = () => {
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
          dispatch(setMethod('Create'));
        }}>
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
