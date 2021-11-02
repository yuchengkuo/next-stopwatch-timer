import { ControlButton } from 'components/Buttons';
import { AddIcon } from 'components/Icons';
import { styled } from 'stitches.config';
import { Text } from 'styles/text';
import { useTimerAmount } from 'utils/useTimer';
import { TimerItem } from './TimerItem';

export const Timer = () => {
  const { amount, addTimer } = useTimerAmount();
  return (
    <>
      <TimerWrap>
        <Text as="h1" type="h1">
          Timer
        </Text>
        {amount.map((timerID) => (
          <TimerItem key={timerID} id={timerID} />
        ))}
        <ButtonWrap>
          <ControlButton
            type="ghost"
            css={{ width: 32, height: 32 }}
            onClick={() => addTimer(amount[amount.length - 1] + 1)}
          >
            <AddIcon />
          </ControlButton>
        </ButtonWrap>
      </TimerWrap>
    </>
  );
};

const TimerWrap = styled('div', {
  maxWidth: 420,
  mx: 'auto',
  width: '100%',
});

const ButtonWrap = styled('div', {
  boxSizing: 'border-box',
  display: 'grid',
  placeItems: 'center',
});
