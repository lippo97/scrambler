#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import {App} from './components/App';

meow(`
	Usage
	  $ scrabler-ts
`);

const enterAltScreenCommand = '\u001B[?1049h';
const leaveAltScreenCommand = '\u001B[?1049l';
process.stdout.write(enterAltScreenCommand);
process.on('exit', () => process.stdout.write(leaveAltScreenCommand));

render(<App/>);
