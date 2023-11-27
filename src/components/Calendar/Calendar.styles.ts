import { styled } from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(6, 1fr);
  width: 968px;
  margin: 0 auto;
  background: #e3e3e3;
  gap: 2px;
  padding: 2px;
`;

export const Cells = styled.div<{
  $isWeekend: boolean;
  $isCurrentDay: boolean;
}>`
  min-width: 110px;
  min-height: 80px;
  background: ${({ $isWeekend }) => ($isWeekend ? '#f5f5f5' : 'white')};
  border: ${({ $isCurrentDay }) => ($isCurrentDay ? '1px solid tomato' : '')};
  background: ${({ $isCurrentDay }) => ($isCurrentDay ? '#ffccbc' : '')};
  border-radius: 5px;
  display: flex;
  justify-content: flex-end;
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
