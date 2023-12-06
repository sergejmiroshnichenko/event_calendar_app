import dayjs from 'dayjs';

export const isWeekend = (day: dayjs.Dayjs) => day.day() === 6 || day.day() === 0;

export const isCurrentDay = (day: dayjs.Dayjs) => day.isSame(dayjs(), 'day');

export const isCurrentMonth = (day: dayjs.Dayjs, today: dayjs.Dayjs) => today.isSame(day, 'month');
