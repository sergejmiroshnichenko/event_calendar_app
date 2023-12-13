import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dayjs, { Dayjs } from 'dayjs';
import 'dayjs/locale/en-gb.js';
import { IEvent, INotificationVisible } from 'types/types.ts';
import { getParsedStoredDate } from 'helpers/calendarDateCalc.ts';

dayjs.locale('en-gb');

const storedEvents = localStorage.getItem('events');
const initialEvents = storedEvents ? JSON.parse(storedEvents) : [];

interface ICalendar {
  event: IEvent;
  events: IEvent[];
  selectedDate: Dayjs;
  method: string;
  modalActive: boolean;
  notificationVisible: INotificationVisible;
}

const initialState: ICalendar = {
  event: {
    title: '',
    description: '',
    date: dayjs().format('YYYY-MM-DD'),
    time: '',
  },
  events: initialEvents,
  selectedDate: getParsedStoredDate(),
  method: '',
  modalActive: false,
  notificationVisible: {
    visible: false,
    type: null,
  },
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
      state.method = initialState.method;
      state.modalActive = initialState.modalActive;
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
    setNotificationVisible: (
      state,
      action: PayloadAction<INotificationVisible>,
    ) => {
      state.notificationVisible = {
        ...state.notificationVisible,
        ...action.payload,
      };
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
  setNotificationVisible,
} = calendarSlice.actions;

export default calendarSlice.reducer;
