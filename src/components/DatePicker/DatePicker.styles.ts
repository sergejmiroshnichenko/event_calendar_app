import { styled } from 'styled-components';
import theme from 'styles/theme.ts';

const navigationStyles = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationBlock = styled.div`
  ${navigationStyles};
  border: 1px solid #9e9e9e;
  border-radius: 15px;
  overflow: hidden;
`;

export const PickerContainer = styled.div`
  background: transparent;
  display: flex;
  gap: 5px;
`;

export const PickerWrapper = styled.div``;

export const ButtonNavigation = styled.button`
  background: transparent;
  padding: 0.4em 0.5em;
  opacity: 0.7;
  border-radius: 0;

  &:hover {
    background: ${theme.colors.hoverNav};
  }
`;

export const YearInfo = styled.h4`
  font-weight: 400;
  margin: 0 5px;
`;

export const IconBox = styled.button`
  background: transparent;
  border: 1px solid ${theme.colors.darkGrey};
  padding: 0.2em 0.4em;

  &:hover {
    background: ${theme.colors.hoverNav};
  }
`;

export const SelectMonth = styled.select`
  border: none;
  margin: 0 5px;
  cursor: pointer;
`;
