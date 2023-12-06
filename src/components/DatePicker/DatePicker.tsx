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
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

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

  return (
    <PickerWrapper onClick={openCalendar}>
      {showDatePicker ? (
        <CalenderContainer>
          <NavigationBlock>
            <ButtonNavigation onClick={prevYearHandler}>{'<'}</ButtonNavigation>
            <h4>{selectedDate.format('YYYY')}</h4>
            <ButtonNavigation onClick={nextYearHandler}>{'>'}</ButtonNavigation>
          </NavigationBlock>

          <NavigationBlock>
            <ButtonNavigation onClick={prevMonthHandler}>{'<'}</ButtonNavigation>
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
            <ButtonNavigation onClick={nextMonthHandler}>{'>'}</ButtonNavigation>
          </NavigationBlock>
        </CalenderContainer>
      ) : (
        <IconBox>
          <CalendarTodayIcon />
        </IconBox>
      )}
    </PickerWrapper>
  );
};
