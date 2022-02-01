import React, { FC } from "react";
import { Box, Text } from 'ink';

export type Key = {
    key: string,
    description: string,
    color?: string,
};

export const Commands: FC<{ keys: Key[]}> = ({ keys }) => {
    const maxLength = Math.max(...keys.map(x => x.key.length));
    return (
        <Box marginTop={1} flexDirection="column" alignItems="flex-start">
            {
                keys.map(({ key, description, color }) => 
                    <Box>
                        <Text color={color ?? 'yellow'}>{key.padStart(maxLength, ' ')}{' '}</Text>
                        <Text>{description}</Text>
                    </Box>
                )
            }
        </Box>
    )
}