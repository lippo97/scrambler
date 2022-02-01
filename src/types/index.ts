export type Status = 'running' | 'stopped' | 'aborted';

export type Type = 'start' | 'stop' | 'abort';

export type Action =
      | {
        type: 'start';
        setTimer: (timer: number) => void;
      }
      | {
        type: 'stop';
      }
      | {
        type: 'abort';
      };

export type State =
      | {
        status: 'running';
        start: number;
        timerId: NodeJS.Timer;
      }
      | {
        status: 'stopped';
        start?: never;
        timerId?: never;
      }
      | {
        status: 'aborted';
        start?: never;
        timerId?: never;
      };
