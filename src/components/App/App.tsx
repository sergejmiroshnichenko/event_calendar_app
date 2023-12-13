import { AppBlock, CalendarWrapper } from './App.styles.ts';
import dayjs from 'dayjs';
import 'dayjs/locale/en-gb.js';
import { UPDATE_METHOD } from 'helpers/constants.ts';
import { useAppSelector } from 'hooks/redux-hooks.ts';

import { Calendar } from 'components/Calendar/Calendar.tsx';
import { CalendarNavigation } from 'components/CalendarNavigation/CalendarNavigation.tsx';
import { Modal } from 'components/Modal/Modal.tsx';
import { FormEvent } from 'components/FormEvent/FormEvent.tsx';
import { Notification } from 'components/Notification/Notification.tsx';

function App() {
  dayjs.locale('en-gb');

  const { method, modalActive } = useAppSelector(state => state.calendar);

  return (
    <AppBlock>
      <CalendarWrapper>
        <CalendarNavigation />
        <Calendar />
      </CalendarWrapper>

      <Modal
        title={
          method === UPDATE_METHOD ? 'Edit idea item' : 'Add new idea item'
        }>
        {modalActive && <FormEvent />}
      </Modal>
      <Notification />
    </AppBlock>
  );
}

export default App;
