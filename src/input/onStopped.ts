import {Action} from '../types';

export const onStopped = (
  {
    isRunning,
    setTimer,
    dispatch,
    exit
  }: {
    isRunning: boolean;
    setTimer: (timer: number) => void;
    dispatch: (action: Action) => void;
    exit: () => void;
  }
) => (input: string) => {
  if (input === 'q') {
    dispatch({type: 'abort'});
    exit();
  }

  if (input === ' ') {
    if (isRunning) {
      dispatch({type: 'stop'});
    } else {
      dispatch({type: 'start', setTimer});
    }
  }

  if (input === 'a' && isRunning) {
    dispatch({type: 'abort'});
  }
};
