import { styled } from 'styled-components';
import theme from 'styles/theme.ts';

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div<{ $type: 'add' | 'remove' }>`
  width: 250px;
  height: 50px;
  background: ${({ $type }) =>
    $type === 'add' ? `${theme.colors.greenPrimary}` : `${theme.colors.redSecondary}`};
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 4px;
  padding: 10px;
  color: white;
  font-weight: 500;
  animation: show-loader 3s forwards;

  @keyframes show-loader {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }
    30% {
      transform: translateY(0);
      opacity: 1;
    }
    90% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-50px);
      opacity: 0;
    }
  }
`;
