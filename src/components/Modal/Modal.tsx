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

interface ModalProps {
  active: boolean;
  setActive: (active: boolean) => void;
  children: ReactNode;
  title: string;
  resetForm: () => void;
  setMethod: (methodName: string) => void;
}

export const Modal: FC<ModalProps> = ({
  active,
  setActive,
  children,
  title,
  resetForm,
  setMethod,
}) => {
  return (
    <ModalBackground
      $active={String(active)}
      onClick={() => {
        setActive(false);
        resetForm();
        setMethod('');
      }}>
      <ModalContent $active={String(active)} onClick={e => e.stopPropagation()}>
        <Title>
          <Confirmation>{title}</Confirmation>
          <Cross
            onClick={() => {
              setActive(false);
              resetForm();
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
