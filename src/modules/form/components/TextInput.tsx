import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, FilledInput, FormControl, FormHelperText, Input, InputLabel } from '@material-ui/core';
import { InputElementEvent } from '../model';

interface TextInputProps {
  value: string;
  label: string;
  onChange?: (element: React.ChangeEvent) => void;
  valueChanged?: (value: string) => void;
  display?: string;
  styleOverrides?: string;
  errorMessage?: string;
  isFilled?: boolean;
  shrinkLabel?: boolean;
  multiline?: boolean;
  type?: string;
  rows?: number;
  inputProps?: Record<string, string | number>;
}

const useStyles = makeStyles((_theme) => ({
  textField: {
    height: '30px',
  },
  helperText: {
    fontSize: '12px',
  },
}));

export default function TextInput(props: TextInputProps): JSX.Element {
  const {
    value,
    label,
    onChange,
    valueChanged,
    styleOverrides,
    errorMessage,
    type,
    display,
    shrinkLabel,
    isFilled = true,
    multiline,
    rows,
    inputProps = {},
  } = props;

  const classes = useStyles();

  const handleChange = (event: InputElementEvent): void => {
    if (onChange) {
      onChange(event);
    }
    if (valueChanged) {
      valueChanged(event.target.value);
    }
  };

  const formattedInput = isFilled ? (
    <FilledInput
      multiline={multiline}
      rows={rows}
      onChange={handleChange}
      type={type}
      value={value}
      inputProps={inputProps}
    />
  ) : (
    <Input onChange={handleChange} type={type} value={value} inputProps={inputProps} />
  );

  return (
    <Box display={display}>
      <FormControl
        variant="filled"
        error={errorMessage?.length > 0}
        className={`${styleOverrides} ${classes.textField}`}
      >
        <InputLabel shrink={shrinkLabel} htmlFor="{label}">
          {label}
        </InputLabel>
        {formattedInput}
        {errorMessage && <FormHelperText className={classes.helperText}>{`${label} ${errorMessage}`}</FormHelperText>}
      </FormControl>
    </Box>
  );
}
