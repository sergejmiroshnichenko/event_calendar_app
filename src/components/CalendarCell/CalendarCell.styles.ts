import { styled } from 'styled-components';
import theme from 'styles/theme.ts';

export const Cell = styled.div<{
  $isWeekend?: boolean;
  $isCurrentDay?: boolean;
  $isHeader?: boolean;
  $isCurrentMonth?: boolean;
}>`
  min-height: ${({ $isHeader }) => ($isHeader ? 24 : 85)}px;
  border-radius: ${({ $isHeader }) => ($isHeader ? '' : '5px')};
  opacity: ${({ $isWeekend }) => $isWeekend && 0.7};
  background: ${({ $isHeader }) => ($isHeader ? '#efebe9' : 'white')};
  background-color: ${({ $isCurrentDay }) => $isCurrentDay && 'beige'};
  display: flex;
  min-width: 110px;
  padding: 4px;
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
  border: 1px solid ${theme.colors.whiteDefault};
  z-index: 1;
  position: relative;
  background: ${theme.colors.currentDay};
  color: ${theme.colors.blackDefault};
  box-shadow: ${theme.shadows.secondary};
`;

export const EventListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-self: end;
  width: 100%;
`;

export const eventItemStyles = `
 color: ${theme.colors.blackDefault};
  border: 0.0625rem solid ${theme.colors.whiteDefault};
  border-radius: 0.5rem;
  box-shadow: ${theme.shadows.secondary};
  word-break: break-all;
  transition: transform 0.7s ease-in-out, filter 0.7s ease-in-out;
  padding: 1px 5px;
  
  &:hover {
    transform: scale(1.05);
    filter: brightness(125%);
    border: 0.0625rem solid ${theme.colors.modalConfirm};
  }
`;

export const EventItemWrapper = styled.button<{
  $bg: string | undefined;
}>`
  opacity: 0.6;
  font-size: 13px;
  background: ${({ $bg }) => $bg};
  ${eventItemStyles}
}
`;

export const ShowMoreButton = styled.button`
  ${eventItemStyles};
  background: ${theme.colors.headerWrap};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
`;
