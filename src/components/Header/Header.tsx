import dayjs from 'dayjs';
import { ButtonComponent } from 'components/Button/Button.tsx';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Stack } from '@mui/material';

const Header = () => {
  const startDayOfWeek = dayjs().startOf('month').format('MMMM YYYY');

  return (
    <Stack direction="row" alignItems="center" mt={1.5} mb={1.5}>
      <ButtonComponent color={'inherit'} onClick={() => {}}>
        <ChevronLeftIcon />
      </ButtonComponent>
      <h2>{startDayOfWeek}</h2>
      <ButtonComponent color={'inherit'} onClick={() => {}}>
        <ChevronRightIcon />
      </ButtonComponent>
    </Stack>
  );
};

export default Header;
