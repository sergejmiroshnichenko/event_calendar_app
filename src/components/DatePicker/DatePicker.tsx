import { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb.js';
import { setSelectedDate } from 'store/slices/calendarSlice.ts';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';

export const DatePickerComponent: FC = () => {
  dayjs.locale('en-gb');

  const [showCalendar, setShowCalendar] = useState(false);
  const { selectedDate } = useAppSelector(state => state.calendar);

  const dispatch = useAppDispatch();

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  const onChangeHandler = (data: Date | null) => {
    if (data) {
      const dayJsData = dayjs(data);
      dispatch(setSelectedDate(dayJsData));
      console.log('dayJsData', dayJsData);
      // setShowCalendar(true);
      toggleCalendar();
    }
  };

  const increaseYear = () => {
    dispatch(setSelectedDate(selectedDate.add(1, 'year')));
    setShowCalendar(true);
  };

  const decreaseYear = () => {
    dispatch(setSelectedDate(selectedDate.subtract(1, 'year')));
  };

  return (
    <div onClick={toggleCalendar}>
      {showCalendar ? (
        <DatePicker
          selected={selectedDate?.toDate()}
          onChange={date => onChangeHandler(date)}
          inline
          showMonthYearPicker
          renderCustomHeader={() => (
            <div>
              <button onClick={decreaseYear}>{'<'}</button>
              <span>{selectedDate?.format('YYYY')}</span>
              <button onClick={increaseYear}>{'>'}</button>
            </div>
          )}
        />
      ) : (
        'Календарь'
      )}
    </div>
  );
};
