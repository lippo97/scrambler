import { Action, State } from "../types";

export function reducer(state: State, action: Action): State {
    switch(action.type) {
        case 'start':
            if (state.status === 'stopped' || state.status === 'aborted') {
                const start = Date.now()
                return {
                    status: 'running',
                    start,
                    timerId: setInterval(() => {
                        action.setTimer(Date.now() - start);
                    }, 27),
                };
            }
        case 'stop':
            if (state.status === 'running') {
                clearInterval(state.timerId);
                return {
                    status: 'stopped',
                };
            }
        case 'abort':
            if (state.status === 'running') {
                clearInterval(state.timerId);
                return {
                    status: 'aborted',
                };
            }
        default: 
            return state;
    }
}