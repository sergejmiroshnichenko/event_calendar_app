import {
  ButtonNavigation,
  IconBox,
  NavigationBlock,
  PickerContainer,
  PickerWrapper,
  SelectMonth,
  YearInfo,
} from './DatePicker.styles.ts';
import { FC, useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';
import { setSelectedDate } from 'store/slices/calendarSlice.ts';
import DatePickerIcon from 'assets/datePicker.svg';
import { getParsedStoredDate, getStoredSelectedDate } from 'helpers/calendarDateCalc.ts';

export const DatePicker: FC = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  const { selectedDate } = useAppSelector(state => state.calendar);

  const datePickerRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const storedSelectedDate = getStoredSelectedDate();
  const parsedStoredDate = getParsedStoredDate();

  const monthPicker = dayjs(`${storedSelectedDate} 1`, 'MMMM D YYYY').month();
  const yearPicker = storedSelectedDate?.split(' ')[1];

  const handleMonthSwitching = (stepMonth: number) => {
    dispatch(setSelectedDate(parsedStoredDate.add(stepMonth, 'month')));
  };

  const handleYearSwitching = (stepYear: number) => {
    dispatch(setSelectedDate(parsedStoredDate.add(stepYear, 'year')));
  };

  const handleMonthSelect = (monthIndex: number) => {
    const newDate = parsedStoredDate.month(monthIndex);
    dispatch(setSelectedDate(newDate));
  };

  const openDatePicker = () => {
    setShowDatePicker(true);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node)
      ) {
        setShowDatePicker(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <PickerWrapper onClick={openDatePicker}>
      {showDatePicker ? (
        <PickerContainer ref={datePickerRef}>
          <NavigationBlock>
            <ButtonNavigation onClick={() => handleYearSwitching(-1)}>
              {<i className="fas fa-angle-left"></i>}
            </ButtonNavigation>
            <YearInfo>{yearPicker || selectedDate.format('YYYY')}</YearInfo>
            <ButtonNavigation onClick={() => handleYearSwitching(1)}>
              {<i id="right" className="fas fa-angle-right"></i>}
            </ButtonNavigation>
          </NavigationBlock>

          <NavigationBlock>
            <ButtonNavigation onClick={() => handleMonthSwitching(-1)}>
              <i className="fas fa-angle-left"></i>
            </ButtonNavigation>

            <SelectMonth
              value={monthPicker ? monthPicker : selectedDate.month()}
              onChange={e => handleMonthSelect(+e.target.value)}>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={i}>
                  {dayjs().month(i).format('MMMM')}
                </option>
              ))}
            </SelectMonth>

            <ButtonNavigation onClick={() => handleMonthSwitching(1)}>
              <i className="fas fa-angle-right"></i>
            </ButtonNavigation>
          </NavigationBlock>
        </PickerContainer>
      ) : (
        <IconBox>
          <img src={DatePickerIcon} alt="calendar icon" />
        </IconBox>
      )}
    </PickerWrapper>
  );
};
