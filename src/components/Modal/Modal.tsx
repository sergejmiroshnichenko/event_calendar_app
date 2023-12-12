import {
  Block,
  Confirmation,
  Cross,
  ModalBackground,
  ModalContent,
  Title,
} from './Modal.styles.ts';
import { FC, ReactNode } from 'react';
import { resetForm } from 'store/slices/calendarSlice.ts';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';

interface ModalProps {
  children: ReactNode;
  title: string;
}

export const Modal: FC<ModalProps> = ({ children, title }) => {
  const dispatch = useAppDispatch();

  const { modalActive } = useAppSelector(state => state.calendar);

  return (
    <ModalBackground
      $active={modalActive}
      onClick={() => {
        dispatch(resetForm());
      }}>
      <ModalContent $active={modalActive} onClick={e => e.stopPropagation()}>
        <Title>
          <Confirmation>{title}</Confirmation>
          <Cross
            onClick={() => {
              dispatch(resetForm());
            }}>
            &times;
          </Cross>
        </Title>
        <Block>{children}</Block>
      </ModalContent>
    </ModalBackground>
  );
};
