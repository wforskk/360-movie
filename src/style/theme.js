import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgba(10, 20, 30)',
    },
    secondary: {
      main: 'rgba(74, 175, 73)',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;