import { styled } from 'styled-components';
import theme from 'styles/theme.ts';

export const ButtonWrapper = styled.button`
  border: unset;
  height: 20px;
  font-weight: bold;
  border-radius: 4px;
  background: transparent;
  display: flex;
  align-items: center;
  outline: unset;
  padding: 0;
  margin: 0;
`;

export const ButtonCreate = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  box-shadow: ${theme.shadows.secondary};
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding: 0;
  background: #00b0ff;
  color: white;
`;

export const HeaderWrapper = styled.header`
  background: #efebe9;
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-start-start-radius: 7px;
  border-start-end-radius: 7px;
`;

export const ButtonNavigation = styled.button`
  background: transparent;
  padding: 0.2em 0.7em;
  border-radius: 7px;
  border: 1px solid #9e9e9e;
  opacity: 0.7;
`;

export const CurrentMonthButton = styled(ButtonWrapper)`
  padding: 0 8px;
`;
