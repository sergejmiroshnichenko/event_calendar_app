import { styled } from 'styled-components';

const navigationStyles = `
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavigationBlock = styled.div`
  ${navigationStyles}
  &.select :checked {
    background: pink;
  }
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
  border: 1px solid #9e9e9e;
  opacity: 0.7;

  &:hover {
    background: #e0e0e0;
  }
`;

export const IconBox = styled.button`
  background: transparent;
  border: 1px solid #9e9e9e;
  padding: 0.2em 0.4em;

  &:hover {
    background: #e0e0e0;
  }
`;
