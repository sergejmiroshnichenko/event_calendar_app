import dayjs from 'dayjs';
import 'dayjs/locale/en-gb.js';
import { Calendar } from 'components/Calendar/Calendar.tsx';
import { CalendarNavigation } from 'components/CalendarNavigation/CalendarNavigation.tsx';
import { Modal } from 'components/Modal/Modal.tsx';
import theme from 'styles/theme.ts';
import { useAppSelector } from 'hooks/redux-hooks.ts';
import { FormEvent } from 'components/FormEvent/FormEvent.tsx';
import { styled } from 'styled-components';

const CalendarWrapper = styled('div')`
  margin: 50px auto;
  max-width: 968px;
  box-shadow: ${theme.shadows.primary};
  border-radius: 7px;
`;

function App() {
  dayjs.locale('en-gb');

  const { method, modalActive } = useAppSelector(state => state.calendar);

  return (
    <>
      <CalendarWrapper>
        <CalendarNavigation />
        <Calendar />
      </CalendarWrapper>

      <Modal title={method === 'Update' ? 'Edit idea item' : 'Add new idea item'}>
        {modalActive && <FormEvent />}
      </Modal>
    </>
  );
}

export default App;
