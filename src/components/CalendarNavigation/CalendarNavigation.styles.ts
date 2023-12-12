import { styled } from 'styled-components';
import theme from 'styles/theme.ts';

export const ButtonCreate = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  box-shadow: ${theme.shadows.secondary};
  justify-content: center;
  transition: transform 0.3s ease-in-out;
  font-size: 14px;
  align-items: center;
  background: ${theme.colors.buttonCreate};
  color: ${theme.colors.whiteDefault};

  &:hover {
    background: ${theme.colors.blueSecondary};
    border: 1px solid ${theme.colors.blueSecondary};
  }
`;

export const HeaderWrapper = styled.div`
  background: ${theme.colors.headerWrap};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 10px;
  border-start-start-radius: 7px;
  border-start-end-radius: 7px;
`;

export const ButtonNavigation = styled.button`
  background: transparent;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  &:hover {
    border-radius: 50%;
    border: 1px solid ${theme.colors.darkGrey};
  }
`;

export const TodayButton = styled.button`
  background: ${theme.colors.lightGray};
  padding: 0.5em 1em;
  height: 35px;

  &:hover {
    background: #d7ccc8;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  overflow: hidden;
`;

export const DateContainer = styled.span`
  width: 150px;
  text-align: center;
  margin: 0 3px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: baseline;
  letter-spacing: 0.01em;
`;
