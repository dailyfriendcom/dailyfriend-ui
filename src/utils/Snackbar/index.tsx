import { EventRegister } from 'react-native-event-listeners';
import type { SnackbarProps } from 'react-native-paper';
import { SnackbarOnCreate } from './SnackbarEvents';
import SnackbarProvider, { Snackbar as ISnackbar } from './SnackbarProvider';

type AlertProps = {
  action?: SnackbarProps['action'];
  duration?: SnackbarProps['duration'];
};

function showSnackbar(text: string, { action, duration }: AlertProps = {}) {
  EventRegister.emit(SnackbarOnCreate, {
    text,
    action,
    duration,
  } as ISnackbar);
}

const Snackbar = {
  show: showSnackbar,
  Provider: SnackbarProvider,
};

export default Snackbar;
