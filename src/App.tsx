import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Routes from './routes';
import { UserContext } from './modules/auth/userContext';
import TopBar from './modules/nav/TopBar';
import './index.css';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    width: '100%',
    padding: 0,
  },
  box: {
    width: '100%',
  },
  content: {
    width: `calc(100% - 100px)`,
    marginLeft: '100px',
    padding: '80px 30px',
  },
}));

const App: React.FC = () => {
  const classes = useStyles();
  const { user } = useContext(UserContext);

  return !user ? (
    <Container className={classes.root} color="background" maxWidth="xl">
      <Box className={classes.box}>
        <TopBar />
      </Box>
    </Container>
  ) : (
    <Container className={classes.root} color="background" maxWidth="xl">
      <Box className={classes.box}>
        <TopBar />
        <main role="main" className={classes.content}>
          <Routes key={user ? user.id : null} />
        </main>
      </Box>
    </Container>
  );
};

export default App;
