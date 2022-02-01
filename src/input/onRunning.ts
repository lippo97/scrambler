import getRandomScramble from '../model/scramble';

export const onRunning = (setScramble: (scramble: string) => void) => (input: string) => {
    if (input === 'n') {
        setScramble(getRandomScramble() as string);
    }
};
