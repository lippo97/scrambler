#!/usr/bin/env node
import React from 'react';
import {render} from 'ink';
import meow from 'meow';
import { App } from './components/App';

meow(`
	Usage
	  $ scrabler-ts
`);

const enterAltScreenCommand = "\x1b[?1049h";
const leaveAltScreenCommand = "\x1b[?1049l";
process.stdout.write(enterAltScreenCommand);
process.on("exit", () => process.stdout.write(leaveAltScreenCommand));

render(<App />);
