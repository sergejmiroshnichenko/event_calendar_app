import { styled } from 'styled-components';
import theme from 'styles/theme.ts';

export const CalendarWrapper = styled.div`
  max-width: 968px;
  width: 100%;
  box-shadow: ${theme.shadows.primary};
  border-radius: 7px;
`;

export const AppBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;