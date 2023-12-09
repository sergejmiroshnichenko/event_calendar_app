import { FC, useState } from 'react';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';
import { setSelectedDate } from 'store/slices/calendarSlice.ts';
import {
  ButtonNavigation,
  CalenderContainer,
  IconBox,
  NavigationBlock,
  PickerWrapper,
} from './DatePicker.styles.ts';
import CalendarTodayIcon from 'assets/calendar.svg';

export const DatePicker: FC = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { selectedDate } = useAppSelector(state => state.calendar);

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

  const dispatch = useAppDispatch();

  const nextYearHandler = () => {
    dispatch(setSelectedDate(parsedStoredDate.add(1, 'year')));
  };

  const prevYearHandler = () => {
    dispatch(setSelectedDate(parsedStoredDate.subtract(1, 'year')));
  };

  const handleMonthChange = (monthIndex: number) => {
    const newDate = parsedStoredDate.month(monthIndex);
    dispatch(setSelectedDate(newDate));
  };

  const closeCalendar = () => {
    setShowDatePicker(false);
  };

  const openCalendar = () => {
    setShowDatePicker(true);
  };

  const monthPicker = dayjs(`${storedSelectedDate} 1`, 'MMMM D YYYY').month();
  const yearPicker = storedSelectedDate?.split(' ')[1];

  return (
    <PickerWrapper onClick={openCalendar}>
      {showDatePicker ? (
        <CalenderContainer>
          <NavigationBlock>
            <ButtonNavigation onClick={prevYearHandler}>
              {<i className="fas fa-angle-left"></i>}
            </ButtonNavigation>
            <h4>{yearPicker || selectedDate.format('YYYY')}</h4>
            <ButtonNavigation onClick={nextYearHandler}>
              {<i id="right" className="fas fa-angle-right"></i>}
            </ButtonNavigation>
          </NavigationBlock>

          <NavigationBlock>
            <ButtonNavigation onClick={prevMonthHandler}>
              {<i className="fas fa-angle-left"></i>}
            </ButtonNavigation>

            <select
              value={monthPicker ? monthPicker : selectedDate.month()}
              onChange={e => handleMonthChange(+e.target.value)}
              onBlur={closeCalendar}>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={i}>
                  {dayjs().month(i).format('MMMM')}
                </option>
              ))}
            </select>

            <ButtonNavigation onClick={nextMonthHandler}>
              {<i id="right" className="fas fa-angle-right"></i>}
            </ButtonNavigation>
          </NavigationBlock>
        </CalenderContainer>
      ) : (
        <IconBox>
          <img src={CalendarTodayIcon} alt="calendar icon" />
        </IconBox>
      )}
    </PickerWrapper>
  );
};
