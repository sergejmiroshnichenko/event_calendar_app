import styled from 'styled-components';
import theme from 'styles/theme.ts';

export const ModalBackground = styled.div<{
  $active: boolean;
}>`
  background: ${theme.colors.overlay};
  height: 100%;
  backdrop-filter: blur(10px);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  pointer-events: ${({ $active }) => ($active ? 'all' : 'none')};
  transition: 0.5s;
`;

export const ModalContent = styled.div<{
  $active: boolean;
}>`
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.whiteDefault};
  border: ${theme.colors.modalContent} solid 4px;
  border-radius: 10px;
  max-width: 22%;
  margin: auto;
  transition: 0.4s all;
  transform: ${({ $active }) => ($active ? 'scale(1)' : 'scale(0.5)')};
  width: 100%;
  height: 400px;
  overflow: auto;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background: ${theme.colors.bgDefault};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Confirmation = styled.div`
  font-weight: 500;
  color: ${theme.colors.modalConfirm};
  margin: 0;
  padding: 10px 0;
  font-size: 18px;
`;

export const Cross = styled.button`
  font-size: 28px;
  background: transparent;
  opacity: 0.7;
  padding: 15px 0;

  &:hover {
    transition: 0.3s ease-in-out;
    transform: scale(1.1);
    opacity: 1;
  }
`;

export const Block = styled.div`
  flex: 1 1 auto;
  padding: 0 15px;
  text-align: left;
`;
