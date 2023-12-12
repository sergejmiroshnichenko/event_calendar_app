import {
  Cell,
  CurrentDay,
  DayWrapper,
  EventItemWrapper,
  EventListWrapper,
} from './CalendarCell.styles.ts';
import { isCurrentDay, isCurrentMonth, isWeekend } from 'helpers/calendarDateCalc.ts';
import dayjs, { Dayjs } from 'dayjs';
import { truncateText } from 'helpers/truncateText.ts';
import { FC } from 'react';
import { IEvent } from 'types/types.ts';

interface ICalendarCellProps {
  dayItem: Dayjs;
  events: IEvent[];
  openFormHandler: (methodName: string, eventForEdit: IEvent) => void;
}

export const CalendarCell: FC<ICalendarCellProps> = ({
  dayItem,
  openFormHandler,
  events,
}) => {
  return (
    <Cell
      key={dayItem.unix()}
      $isWeekend={isWeekend(dayItem)}
      $isCurrentDay={isCurrentDay(dayItem)}
      $isCurrentMonth={isCurrentMonth(dayItem, dayjs())}>
      <DayWrapper>
        {isCurrentDay(dayItem) ? (
          <CurrentDay>{dayItem.format('D')}</CurrentDay>
        ) : (
          dayItem.format('D')
        )}
      </DayWrapper>
      <EventListWrapper>
        {events.map(event => (
          <li key={event.id}>
            <EventItemWrapper
              $bg={event.background}
              onClick={() => openFormHandler('Update', event)}>
              {truncateText(event.title, 22)}
            </EventItemWrapper>
          </li>
        ))}
      </EventListWrapper>
    </Cell>
  );
};
