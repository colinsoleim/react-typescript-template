import React, { FunctionComponent, useState, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Button } from '@material-ui/core';
import TextInput from '../../form/components/TextInput';
import { UserContext } from '../userContext';

// TODO: Temp styles before we line things up with the mockup
const useStyles = makeStyles({
  textInput: {
    height: '60px',
    width: '90%',
    margin: '15px 0 0',
  },
  baseError: {
    marginBottom: '10px',
  },
});

const LoginForm: FunctionComponent = () => {
  const classes = useStyles();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(UserContext);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleLogin}>
      <TextInput
        styleOverrides={classes.textInput}
        label="Email or Username"
        value={email}
        valueChanged={(value: string) => setEmail(value)}
      />
      <TextInput
        styleOverrides={classes.textInput}
        type="password"
        label="Password"
        value={password}
        valueChanged={(value: string) => setPassword(value)}
      />
      <br />
      <Grid container>
        <Grid item>
          <Button variant="contained" color="primary" onClick={(e) => handleLogin(e)}>
            Login
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
