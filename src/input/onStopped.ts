import { Action } from '../types';

export const onStopped = (
    {
        isRunning,
        setTimer,
        dispatch,
        exit
    } : {
        isRunning: boolean,
        setTimer: (timer: number) => void,
        dispatch: (action: Action) => void,
        exit: () => void
    }
) => (input: string) => {
        if (input === 'q') {
            dispatch({ type: 'abort' });
            exit();
        }
        if (input === ' ') {
            if (!isRunning) {
                dispatch({ type: 'start', setTimer });
            } else {
                dispatch({ type: 'stop' });
            }
        }
        if (input === 'a') {
            if (isRunning) {
                dispatch({ type: 'abort' });
            }
        }
    }