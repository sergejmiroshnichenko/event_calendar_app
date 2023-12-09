import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/en-gb.js';
import { IEvent } from 'types/types.ts';
import { getParsedStoredDate } from 'helpers/calendarDateCalc.ts';

dayjs.locale('en-gb');

const storedEvents = localStorage.getItem('events');
const initialEvents = storedEvents ? JSON.parse(storedEvents) : [];

const parsedStoredDate = getParsedStoredDate();

interface ICalendar {
  event: IEvent;
  events: IEvent[];
  selectedDate: Dayjs;
  method: string;
  modalActive: boolean;
}

const initialState: ICalendar = {
  event: {
    title: '',
    description: '',
    date: dayjs().format('YYYY-MM-DD'),
    time: '',
  },
  events: initialEvents,
  selectedDate: parsedStoredDate,
  method: '',
  modalActive: false,
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
    setEvents: (state, action: PayloadAction<IEvent[]>) => {
      state.events = action.payload;
    },
    resetForm: state => {
      state.event = initialState.event;
    },
    setSelectedDate: (state, action: PayloadAction<Dayjs>) => {
      localStorage.setItem('selectedDate', action.payload.format('MMMM YYYY'));
      state.selectedDate = action.payload;
    },
    setMethod: (state, action: PayloadAction<string>) => {
      state.method = action.payload;
    },
    setModalActive: (state, action: PayloadAction<boolean>) => {
      state.modalActive = action.payload;
    },
  },
});

export const {
  setEvent,
  setEvents,
  setModalActive,
  resetForm,
  setSelectedDate,
  setMethod,
} = calendarSlice.actions;

export default calendarSlice.reducer;
