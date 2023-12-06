import { styled } from 'styled-components';

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
`;

export const PickerWrapper = styled.div``;

export const ButtonNavigation = styled.button`
  background: transparent;
  padding: 0.25em 1em;
  border-radius: 7px;
  border: 1px solid #9e9e9e;

  &:hover {
    background: #e0e0e0;
  }
`;

export const IconBox = styled.button`
  background: transparent;
  border: 1px solid #9e9e9e;
  padding: 0.35em 1em;

  &:hover {
    background: #e0e0e0;
  }
`;
