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
  background: ${theme.colors.buttonCreate};
  color: ${theme.colors.whiteDefault};
`;

export const HeaderWrapper = styled.div`
  background: ${theme.colors.headerWrap};
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
  border: 1px solid ${theme.colors.darkGrey};
  opacity: 0.7;
`;

export const CurrentMonthButton = styled(ButtonWrapper)`
  padding: 0 8px;
`;
