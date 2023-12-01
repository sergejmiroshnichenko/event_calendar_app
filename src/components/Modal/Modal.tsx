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
}

export const Modal: FC<ModalProps> = ({ active, setActive, children, title, resetForm }) => {
  return (
    <ModalBackground $active={String(active)} onClick={() => setActive(false)}>
      <ModalContent $active={String(active)} onClick={e => e.stopPropagation()}>
        <Title>
          <Confirmation>{title}</Confirmation>
          <Cross
            onClick={() => {
              setActive(false);
              resetForm();
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
