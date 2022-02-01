import React, {FC, useReducer, useState} from 'react';
import {Box, Newline, Text, useApp, useInput} from 'ink';
import {reducer} from '../state/reducer';
import {State} from '../types';
import {useSize} from '../hooks/useSize';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import getRandomScramble from '../model/scramble';
import {onRunning} from '../input/onRunning';
import {onStopped} from '../input/onStopped';
import {RunningCommand} from './RunningCommand';
import {StoppedCommand} from './StoppedCommand';

const initialState: State = {
  status: 'aborted',
  start: undefined
};

export const App: FC = () => {
  const {exit} = useApp();
  const [scramble, setScramble] = useState(getRandomScramble());
  const [timer, setTimer] = useState(0);
  const [{status}, dispatch] = useReducer(reducer, initialState);

  const size = useSize();

  const isRunning = status === 'running';
  const isAborted = status === 'aborted';

  useInput(onRunning(setScramble), {
    isActive: !isRunning
  });

  useInput(onStopped({
    isRunning,
    setTimer,
    dispatch,
    exit
  }));

  return (
    <Box width={size.columns} height={size.rows} flexDirection="column" alignItems="center">
      <Gradient name="mind">
        <BigText text="Scrambler" font="shade"/>
      </Gradient>
      <Text>
        Next: <Text color="green">{scramble}</Text>
      </Text>
      <Newline count={1}/>
      <Text>
        Timer:{' '}
        <Text
          color={isAborted ? 'red' : 'yellow'}
          dimColor={isRunning}
          strikethrough={isAborted}
        >
          {(timer / 1000).toFixed(3)}
        </Text>
      </Text>
      {isRunning ? <RunningCommand/> : <StoppedCommand/>}
    </Box>
  );
};

