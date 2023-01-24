import { EventRegister } from 'react-native-event-listeners';
import { Snackbar, SnackbarProps } from 'react-native-paper';
import { SnackbarOnCreate } from './SnackbarEvents';
import SnackbarProvider, { Snackbar as ISnackbar } from './SnackbarProvider';

type AlertProps = {
  action?: SnackbarProps['action'];
  duration?: SnackbarProps['duration'];
};

function showSnackbar(
  text: string,
  { action, duration = 1500 }: AlertProps = {}
) {
  EventRegister.emit(SnackbarOnCreate, {
    text,
    action,
    duration,
  } as ISnackbar);
}

// @ts-expect-error
Snackbar.show = showSnackbar;

// @ts-expect-error
Snackbar.Provider = SnackbarProvider;

export default Snackbar as typeof Snackbar & {
  show: typeof showSnackbar;
  Provider: typeof SnackbarProvider;
};
