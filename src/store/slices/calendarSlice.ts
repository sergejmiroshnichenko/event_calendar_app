import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';

interface ICalendar {
  event: Record<string, string>;
  selectedDate: Dayjs;
}

const initialState: ICalendar = {
  event: {
    title: '',
    description: '',
    date: dayjs().format('YYYY-MM-DD'),
    time: '',
  },
  selectedDate: dayjs(),
};

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {
    setEventDetails: (state, action: PayloadAction<Record<string, string>>) => {
      state.event = {
        ...state.event,
        ...action.payload,
      };
    },
    resetForm: state => {
      state.event = initialState.event;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setEventDetails, resetForm, setSelectedDate } = calendarSlice.actions;

export default calendarSlice.reducer;
