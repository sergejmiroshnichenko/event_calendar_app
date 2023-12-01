import { configureStore } from '@reduxjs/toolkit';
import calendarSlice from 'store/slices/calendarSlice.ts';

export const store = configureStore({
  devTools: true,
  reducer: {
    calendar: calendarSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
