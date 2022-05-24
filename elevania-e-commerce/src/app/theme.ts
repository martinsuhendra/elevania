import {colors, createTheme} from '@mui/material';

const theme = createTheme({
  palette: {
    common: {
      black: '#1B2434',
    },
    primary: {
      main: '#EA4989',
      contrastText: '#F7F9FC',
    },
    secondary: {
      main: '#1B2434',

      contrastText: colors.grey[50],
    },
    info: {
      main: '#396EB0',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#F76E11',
      dark: '#DF711B',
    },
    text: {
      primary: '#212121',
      secondary: colors.grey[500],
    },
    background: {
      default: '#F7F9FC',
    },
  },
  typography: {
    fontFamily: 'Assistant, sans-serif',
    button: {
      textTransform: 'none',
    },
    h3: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: -1,
    },
    subtitle1: {
      fontSize: '1.4rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
    subtitle2: {
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '0em',
    },
  },
});

export {theme};
