import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  incomplete: {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.main,
    height: '90vh',
    width: '48vw'
  },
  complete: {
    backgroundColor: 'red',
    height: '90vh',
    width: '48vw'
  }
}));