import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#8202FF',
      dark: '#400776',
    },
    secondary: {
      main: '#7C3BB8',
    },
    error: {
      main: '#D01111',
    },
    warning: {
      main: '#E9F209',
    },
    background: {
      default: '#CCC',
    },
    info: {
      main: '#ACB0B3',
    },
    success: {
      main: '#3EC50B',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontSize: '26px',
      fontWeight: 600,
      color: '#000',
      marginBottom: '5px',
      lineHeight: '40px',
    },
    h2: {
      fontSize: '20px',
      fontWeight: 600,
      color: '#000',
      marginBottom: '10px',
    },
    h3: {
      fontSize: '18px',
      fontWeight: 600,
      color: '#000',
    },
    h4: {
      color: '#000',
      fontSize: '14px',
    },
    h5: {
      color: '#000',
      fontSize: '14px',
    },
    h6: {
      color: '#000',
      fontSize: '14px',
    },
    // Used for InformationField label text
    subtitle1: {
      fontSize: '14px',
      color: '#000',
      marginBottom: '4px',
    },
    // Used for sidebar link text
    subtitle2: {
      color: '#000',
      fontSize: '10px',
      textDecoration: 'none',
    },
    // Used for InformationField value text
    body1: {
      fontSize: '15px',
      color: '#000',
    },
    // Used for TopBar link text
    body2: {
      fontSize: '14px',
      color: '#000',
    },
    button: {
      fontSize: '14px',
      boxShadow: 'none',
      height: '40px',
    },
    caption: {
      fontSize: '14px',
    },
    overline: {
      fontSize: '14px',
    },
  },
});

export default theme;
