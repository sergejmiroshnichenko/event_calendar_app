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

  const prevMonthHandler = () => {
    dispatch(setSelectedDate(selectedDate.subtract(1, 'month')));
  };

  const nextMonthHandler = () => {
    dispatch(setSelectedDate(selectedDate.add(1, 'month')));
  };

  const dispatch = useAppDispatch();

  const nextYearHandler = () => {
    dispatch(setSelectedDate(selectedDate.add(1, 'year')));
  };

  const prevYearHandler = () => {
    dispatch(setSelectedDate(selectedDate.subtract(1, 'year')));
  };

  const handleMonthChange = (monthIndex: number) => {
    const newDate = selectedDate.month(monthIndex);
    dispatch(setSelectedDate(newDate));
  };

  const closeCalendar = () => {
    setShowDatePicker(false);
  };

  const openCalendar = () => {
    setShowDatePicker(true);
  };

  const selected = localStorage.getItem('selectedDate');
  const monthPicker = selected?.split(' ')[0];
  const yearPicker = selected?.split(' ')[1];
  console.log('yearPicker', yearPicker);
  console.log('monthPicker', monthPicker);

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
              value={selectedDate.month()}
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
