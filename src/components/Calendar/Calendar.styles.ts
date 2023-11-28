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
`;

export const Cells = styled.div<{
  $isWeekend?: boolean;
  $isCurrentDay?: boolean;
  $isHeader?: boolean;
}>`
  min-height: ${({ $isHeader }) => ($isHeader ? 24 : 80)}px;
  border-radius: ${({ $isHeader }) => ($isHeader ? '' : 5)}px;
  background: ${({ $isWeekend }) => ($isWeekend ? '#f5f5f5' : 'white')};
  border: ${({ $isCurrentDay }) => ($isCurrentDay ? '1px solid tomato' : '')};
  background: ${({ $isHeader }) => ($isHeader ? '#efebe9' : 'white')};
  background: ${({ $isCurrentDay }) => ($isCurrentDay ? '#ffccbc' : '')};
  display: flex;
  justify-content: flex-end;
  min-width: 110px;
  padding: 5px;
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
