import { styled } from 'styled-components';
import theme from 'styles/theme.ts';

const navigationStyles = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationBlock = styled.div`
  ${navigationStyles}
`;

export const CalenderContainer = styled.div`
  background: transparent;
  display: flex;
  gap: 5%;
`;

export const PickerWrapper = styled.div``;

export const ButtonNavigation = styled.button`
  background: transparent;
  padding: 0.2em 0.7em;
  border-radius: 7px;
  border: 1px solid ${theme.colors.darkGrey};
  opacity: 0.7;

  &:hover {
    background: ${theme.colors.hoverNav};
  }
`;

export const IconBox = styled.button`
  background: transparent;
  border: 1px solid ${theme.colors.darkGrey};
  padding: 0.2em 0.4em;

  &:hover {
    background: ${theme.colors.darkGrey};
  }
`;
