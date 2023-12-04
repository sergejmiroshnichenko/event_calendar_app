import { Dayjs } from 'dayjs';
import { styled } from 'styled-components';
import { FC } from 'react';

const ButtonWrapper = styled.button`
  border: unset;
  height: 20px;
  font-weight: bold;
  border-radius: 4px;
  background: transparent;
  display: flex;
  align-items: center;
  outline: unset;
  padding: 0;
  margin: 0;
`;

const ButtonCreate = styled.button`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  box-shadow:
    rgba(0, 0, 0, 0.08) 0 0 0 1px,
    rgba(0, 0, 0, 0.3) 0 4px 4px 0;
  display: flex;
  justify-content: center;
  font-size: 25px;
  padding: 0;
  background: #00b0ff;
  color: white;
`;

const CurrentMonthButton = styled(ButtonWrapper)`
  padding: 0 8px;
`;

interface HeaderProps {
  prevMonthHandler: () => void;
  nextMonthHandler: () => void;
  currentMonthHandler: () => void;
  today: Dayjs;
  setModalActive: (active: boolean) => void;
  // openCreate: (methodName: string) => void;
  // method: string;
}

export const Header: FC<HeaderProps> = ({
  currentMonthHandler,
  nextMonthHandler,
  prevMonthHandler,
  today,
  setModalActive,
  // openCreate,
  // method,
}) => {
  const startDayOfWeek = today.clone().startOf('month').format('MMMM YYYY');

  return (
    <div
      style={{
        background: '#efebe9',
        display: 'flex',
        alignItems: 'center',
        padding: '15px 10px',
        borderStartStartRadius: 7,
        borderStartEndRadius: 7,
      }}>
      <ButtonCreate
        onClick={() => {
          setModalActive(true);
          // openCreate('Create');
        }}>
        {/*{method}*/}+
      </ButtonCreate>
      <ButtonWrapper onClick={prevMonthHandler}>&#60;</ButtonWrapper>
      <CurrentMonthButton onClick={currentMonthHandler}>{startDayOfWeek}</CurrentMonthButton>
      <ButtonWrapper onClick={nextMonthHandler}>&#62;</ButtonWrapper>
    </div>
  );
};
