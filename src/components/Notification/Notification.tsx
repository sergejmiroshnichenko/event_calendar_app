import { Container, Wrapper } from './Notification.styles.ts';
import { FC, useEffect } from 'react';
import SuccessIcon from 'assets/success_icon.svg';
import { setNotificationVisible } from 'store/slices/calendarSlice.ts';
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks.ts';

export const Notification: FC = () => {
  const { notificationVisible } = useAppSelector(state => state.calendar);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (notificationVisible) {
        dispatch(setNotificationVisible({ visible: false, type: null }));
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [dispatch, notificationVisible.visible]);

  return (
    <Wrapper>
      {notificationVisible.visible && (
        <Container $type={notificationVisible.type as 'add' | 'remove'}>
          {notificationVisible.type === 'add' ? (
            <>
              <p>Event successfully created </p>
              <img src={SuccessIcon} alt="success icon" />
            </>
          ) : (
            <p> Event successfully removed &#128542;</p>
          )}
        </Container>
      )}
    </Wrapper>
  );
};
