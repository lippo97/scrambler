import React from "react";
import { Commands, Key } from "./Commands";

const keys: Key[] = [
    {
        key: 'SPC',
        description: 'to start/stop the timer',
    },
    {
        key: 'n',
        description: 'to get a new scramble'
    },
    {
        key: 'd',
        description: 'to delete last solution',
    },
    {
        key: 'q',
        description: 'to leave application',
        color: 'red',
    }
];

export const StoppedCommand = () => <Commands keys={keys} />;