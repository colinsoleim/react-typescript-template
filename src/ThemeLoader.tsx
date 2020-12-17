import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import { UserContextProvider } from './modules/auth/userContext';
import theme from './theme';
import './index.css';

const ThemeLoader: React.FC = () => {
  const [newTheme] = React.useState(theme);

  return (
    newTheme && (
      <ThemeProvider theme={newTheme}>
        <CssBaseline />
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </ThemeProvider>
    )
  );
};

export default ThemeLoader;
