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

const CurrentMonthButton = styled(ButtonWrapper)`
  padding: 0 8px;
`;

interface HeaderProps {
  prevMonthHandler: () => void;
  nextMonthHandler: () => void;
  currentMonthHandler: () => void;
  today: Dayjs;
  setModalActive: (active: boolean) => void;
}

export const Header: FC<HeaderProps> = ({
  currentMonthHandler,
  nextMonthHandler,
  prevMonthHandler,
  today,
  setModalActive,
}) => {
  const startDayOfWeek = today.clone().startOf('month').format('MMMM YYYY');

  return (
    <div
      style={{
        background: '#efebe9',
        display: 'flex',
        alignItems: 'center',
        padding: '15px 0',
        borderStartStartRadius: 7,
        borderStartEndRadius: 7,
      }}>
      <button onClick={() => setModalActive(true)}>+</button>
      <ButtonWrapper onClick={prevMonthHandler}>&#60;</ButtonWrapper>
      <CurrentMonthButton onClick={currentMonthHandler}>{startDayOfWeek}</CurrentMonthButton>
      <ButtonWrapper onClick={nextMonthHandler}>&#62;</ButtonWrapper>
    </div>
  );
};
