import { useAppSelector } from 'hooks/redux-hooks.ts';
import { isDayContainCurrentEvent } from 'helpers/calendarDateCalc.ts';
import dayjs from 'dayjs';

export const EventsSelectedDay = () => {
  const { events } = useAppSelector(state => state.calendar);

  const eventList = events.filter(event =>
    isDayContainCurrentEvent(event, dayjs()),
  );

  // event.date, 'YYYY-MM-DD'
  eventList.map(item => console.log(item.date));

  return (
    <div>
      {eventList.map(event => (
        <li>{event.title}</li>
      ))}
    </div>
  );
};
