import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/en-gb.js';
import { IEvent } from 'types/types.ts';

dayjs.locale('en-gb');

interface ICalendar {
  event: IEvent;
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
    setEvent: (state, action: PayloadAction<IEvent>) => {
      state.event = {
        ...state.event,
        ...action.payload,
      };
    },
    resetForm: state => {
      state.event = initialState.event;
    },
    setSelectedDate: (state, action: PayloadAction<Dayjs>) => {
      state.selectedDate = action.payload;
    },
  },
});

export const { setEvent, resetForm, setSelectedDate } = calendarSlice.actions;

export default calendarSlice.reducer;
