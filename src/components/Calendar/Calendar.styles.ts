import { styled } from 'styled-components';

export const GridWrapper = styled.div<{
  $isHeader?: boolean;
}>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 968px;
  margin: 0 auto;
  background: ${({ $isHeader }) => ($isHeader ? '#efebe9' : '#e3e3e3')};
  gap: 2px;
  padding: ${({ $isHeader }) => ($isHeader ? '' : 1)};
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  font-size: 18px;
  font-weight: 500;
  font-style: italic;
`;

export const Cells = styled.div<{
  $isWeekend?: boolean;
  $isCurrentDay?: boolean;
  $isHeader?: boolean;
  $isCurrentMonth?: boolean;
}>`
  min-height: ${({ $isHeader }) => ($isHeader ? 24 : 80)}px;
  border-radius: ${({ $isHeader }) => ($isHeader ? '' : 5)}px;
  background: ${({ $isWeekend }) => ($isWeekend ? '#f5f5f5' : 'white')};
  background: ${({ $isHeader }) => ($isHeader ? '#efebe9' : 'white')};
  background: ${({ $isCurrentDay }) => ($isCurrentDay ? '#eeeeee' : '')};
  display: flex;
  min-width: 110px;
  padding: 5px;

  justify-content: space-between;
  flex-direction: row-reverse;

  color: ${({ $isCurrentMonth }) => ($isCurrentMonth ? 'black' : '#bdbdbd')};
`;

export const DayWrapper = styled.div``;

export const CurrentDay = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  margin: -5px;
`;

export const EventListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: end;
  width: 100%;
`;

export const EventItemWrapper = styled.li<{
  $bg: string;
}>`
  background: ${({ $bg }) => $bg};
  color: black;
  padding: 1px 5px;
  opacity: 0.6;
  font-size: 14px;
  font-weight: 500;
  border: 0.0625rem solid #f8f8f8;
  border-radius: 0.5rem;
  box-shadow:
    rgba(0, 0, 0, 0.08) 0 0 0 1px,
    rgba(0, 0, 0, 0.3) 0 4px 4px 0;
  word-break: break-all;
`;
