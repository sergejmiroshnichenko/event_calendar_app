import styled from 'styled-components';

export const ModalBackground = styled.div<{ $active: string }>`
  background: rgba(0, 0, 0, 0.75);
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

export const ModalContent = styled.div<{ $active: string }>`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: burlywood solid 4px;
  border-radius: 10px;
  max-width: 22%;
  margin: auto;
  transition: 0.4s all;
  transform: ${({ $active }) => ($active ? 'scale(1)' : 'scale(0.5)')};
  width: 600px;
  height: 400px;
  overflow: auto;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  background: #f2f2f2;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

export const Confirmation = styled.div`
  font-weight: 500;
  color: #3f5f79;
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

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  height: 40px;
  background: #f2f2f2;
  border-end-end-radius: 11px;
  border-end-start-radius: 11px;
  align-items: center;
`;

export const Block = styled.div`
  flex: 1 1 auto;
  padding: 0 15px;
  text-align: left;
`;

// @media (min-width: 320px) and (max-width: 480px) {
// .modal_content.active {
//     max-width: 100%;
//     font-size: 14px;
//     margin: auto;
//     position: absolute;
//     top: 70px;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     width: 300px;
//   }
// }
//
// @media (min-width: 480px) and (max-width: 768px) {
// .modal_content.active {
//     max-width: 100%;
//     font-size: 15px;
//     margin: auto;
//     position: absolute;
//     top: 70px;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     width: 400px;
//   }
// }
//
// @media (min-width: 768px) and (max-width: 992px) {
// .modal_content.active {
//     max-width: 100%;
//     font-size: 16px;
//     margin: auto;
//     position: absolute;
//     top: 70px;
//     left: 0;
//     bottom: 0;
//     right: 0;
//     width: 500px;
//   }
// }
