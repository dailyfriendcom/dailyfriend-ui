import { EventRegister } from 'react-native-event-listeners';
import { Snackbar } from 'react-native-paper';
import { SnackbarOnCreate } from './SnackbarEvents';
import SnackbarProvider from './SnackbarProvider';
function showSnackbar(text) {
  let {
    action,
    duration
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  EventRegister.emit(SnackbarOnCreate, {
    text,
    action,
    duration
  });
}

// @ts-expect-error
Snackbar.show = showSnackbar;

// @ts-expect-error
Snackbar.Provider = SnackbarProvider;
export default Snackbar;
//# sourceMappingURL=index.js.map