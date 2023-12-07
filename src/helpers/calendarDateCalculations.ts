import dayjs, { Dayjs } from 'dayjs';
import { IEvent } from 'types/types.ts';

export const isWeekend = (day: dayjs.Dayjs) => day.day() === 6 || day.day() === 0;

export const isCurrentDay = (day: dayjs.Dayjs) => day.isSame(dayjs(), 'day');

export const isCurrentMonth = (day: dayjs.Dayjs, today: dayjs.Dayjs) =>
  today.isSame(day, 'month');

export const isDayContainCurrentEvent = (event: IEvent, dayItem: Dayjs) => {
  return (
    dayjs(event.date).unix() >= dayItem.unix() &&
    dayjs(event.date).unix() <= dayItem.clone().endOf('day').unix()
  );
};
