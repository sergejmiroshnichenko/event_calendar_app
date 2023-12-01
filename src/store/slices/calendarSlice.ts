import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs from 'dayjs';

interface ICalendar {
  event: Record<string, string>;
}

const initialState: ICalendar = {
  event: {
    title: '',
    description: '',
    date: dayjs().format('YYYY-MM-DD'),
    time: '',
  },
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
  },
});

export const { setEventDetails, resetForm } = calendarSlice.actions;

export default calendarSlice.reducer;
