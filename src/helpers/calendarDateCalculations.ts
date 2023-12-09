import dayjs, { Dayjs } from 'dayjs';
import { IEvent } from 'types/types.ts';

dayjs.locale('en-gb');

export const isWeekend = (day: dayjs.Dayjs) => day.day() === 6 || day.day() === 0;

export const isCurrentDay = (day: dayjs.Dayjs) => day.isSame(dayjs(), 'day');

export const isCurrentMonth = (day: dayjs.Dayjs, today: dayjs.Dayjs) =>
  today.isSame(day, 'month');

export const isDayContainCurrentEvent = (event: IEvent, dayItem: Dayjs) =>
  dayjs(event.date).unix() >= dayItem.unix() &&
  dayjs(event.date).unix() <= dayItem.clone().endOf('day').unix();

export const getStoredSelectedDate = (): string => {
  const storedDate = localStorage.getItem('selectedDate');
  return storedDate ? storedDate : dayjs().format('MMMM YYYY');
}; // December 2023

export const parsedStoredDate = getStoredSelectedDate()
  ? dayjs(`${getStoredSelectedDate()} 1`, 'MMMM D YYYY') // Dec 01 2023
  : dayjs();
