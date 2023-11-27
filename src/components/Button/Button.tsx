import { FC, ReactNode } from 'react';
import { Button } from '@mui/material';

interface ButtonComponentProps {
  children: ReactNode;
  color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
  onClick: () => void;
}

export const ButtonComponent: FC<ButtonComponentProps> = ({
  children,
  onClick,
  color,
  ...props
}) => {
  return (
    <Button
      variant="contained"
      color={color}
      type="button"
      size="small"
      disableElevation
      onClick={onClick}
      {...props}>
      {children}
    </Button>
  );
};
