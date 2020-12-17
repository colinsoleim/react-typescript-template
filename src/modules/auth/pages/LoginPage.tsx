import React, { FunctionComponent } from 'react';
import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import LoginForm from '../components/LoginForm';

const LoginPage: FunctionComponent = () => {
  return (
    <Box my={4}>
      <Grid container spacing={3}>
        <Grid item xs={1} md={2} />
        <Grid item xs={10} md={8}>
          <Typography variant="h1" component="h1">
            Login
          </Typography>
          <br />
          <Card>
            <CardContent>
              <LoginForm />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
