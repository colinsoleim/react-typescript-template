import React from 'react';

export type InputElementEvent = React.ChangeEvent<HTMLInputElement>;
export type SelectElementEvent = React.ChangeEvent<{ name?: string; value: string }>;
