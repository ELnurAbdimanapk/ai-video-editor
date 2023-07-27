// styles.js
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
  logo: {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    textDecoration: 'none',
  },
  menuAppBar: {
    display: { xs: 'block', md: 'none' },
  },
});
