import React from "react";
import { Commands, Key } from "./Commands";

const keys: Key[] = [
    {
        key: 'SPC',
        description: 'to start/stop the timer',
    },
    {
        key: 'a',
        description: 'to abort the execution',
        color: 'red',
    },
    {
        key: 'q',
        description: 'to leave application',
        color: 'red',
    }
];

export const RunningCommand = () => <Commands keys={keys} />;