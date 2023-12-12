import dayjs from 'dayjs';
import 'dayjs/locale/en-gb.js';
import { Calendar } from 'components/Calendar/Calendar.tsx';
import { CalendarNavigation } from 'components/CalendarNavigation/CalendarNavigation.tsx';
import { Modal } from 'components/Modal/Modal.tsx';
import theme from 'styles/theme.ts';
import { useAppSelector } from 'hooks/redux-hooks.ts';
import { FormEvent } from 'components/FormEvent/FormEvent.tsx';
import { styled } from 'styled-components';
import { Notification } from 'components/Notification/Notification.tsx';

const CalendarWrapper = styled('div')`
  max-width: 968px;
  width: 100%;
  box-shadow: ${theme.shadows.primary};
  border-radius: 7px;
`;

const AppBlock = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

function App() {
  dayjs.locale('en-gb');

  const { method, modalActive } = useAppSelector(state => state.calendar);

  return (
    <AppBlock>
      <CalendarWrapper>
        <CalendarNavigation />
        <Calendar />
      </CalendarWrapper>

      <Modal title={method === 'Update' ? 'Edit idea item' : 'Add new idea item'}>
        {modalActive && <FormEvent />}
      </Modal>
      <Notification />
    </AppBlock>
  );
}

export default App;
