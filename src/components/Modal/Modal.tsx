import {
  Block,
  ButtonBlock,
  Confirmation,
  Cross,
  ModalBackground,
  ModalContent,
  Title,
} from './Modal.styles.ts';
import { FC, ReactNode } from 'react';
import { resetForm } from 'store/slices/calendarSlice.ts';
import { useAppDispatch } from 'hooks/redux-hooks.ts';

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  children: ReactNode;
  title: string;
  setMethod: (methodName: string) => void;
}

export const Modal: FC<ModalProps> = ({
  active,
  setActive,
  children,
  title,
  setMethod,
}) => {
  const dispatch = useAppDispatch();
  return (
    <ModalBackground
      $active={String(active)}
      onClick={() => {
        setActive(false);
        dispatch(resetForm());
        setMethod('');
      }}>
      <ModalContent $active={String(active)} onClick={e => e.stopPropagation()}>
        <Title>
          <Confirmation>{title}</Confirmation>
          <Cross
            onClick={() => {
              setActive(false);
              dispatch(resetForm());
              setMethod('');
            }}>
            &times;
          </Cross>
        </Title>
        <Block>{children}</Block>
        <ButtonBlock></ButtonBlock>
      </ModalContent>
    </ModalBackground>
  );
};
