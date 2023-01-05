import type { AlertButton } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { AlertOnCreate } from './AlertEvents';
import AlertProvider, {
  Alert as IAlert,
  AlertButtonOptions,
} from './AlertProvider';

function showAlert(title: string, message?: string, buttons?: AlertButton[]) {
  EventRegister.emit(AlertOnCreate, {
    type: 'alert',
    title,
    message,
    buttons,
  } as IAlert);
}

function showWithContent(title: string, customContent: React.ReactNode) {
  EventRegister.emit(AlertOnCreate, {
    type: 'alert',
    title,
    customContent,
  } as IAlert);
}

function showChooseOptions(
  title: string,
  options: AlertButtonOptions[],
  onDismiss: (value: string) => void
) {
  EventRegister.emit(AlertOnCreate, {
    type: 'chooseOptions',
    title,
    options,
    onDismiss,
  } as IAlert);
}

function yesOrNoButtons(
  yesLabel: string,
  cancelableLabel: string,
  yesFunction: (value?: string) => void
): AlertButton[] {
  return [
    {
      text: cancelableLabel,
      style: 'cancel',
    },
    {
      text: yesLabel,
      onPress: yesFunction,
    },
  ];
}

const Alert = {
  show: showAlert,
  withContent: showWithContent,
  chooseOptions: showChooseOptions,
  yesOrNoButtons,
  Provider: AlertProvider,
};

export default Alert;
