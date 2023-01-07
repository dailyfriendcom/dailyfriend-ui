import { EventRegister } from 'react-native-event-listeners';
import { AlertOnCreate } from './AlertEvents';
import AlertProvider from './AlertProvider';
function showAlert(title, message, buttons) {
  EventRegister.emit(AlertOnCreate, {
    type: 'alert',
    title,
    message,
    buttons
  });
}
function showWithContent(title, customContent) {
  EventRegister.emit(AlertOnCreate, {
    type: 'alert',
    title,
    customContent
  });
}
function showChooseOptions(title, options, onDismiss) {
  EventRegister.emit(AlertOnCreate, {
    type: 'chooseOptions',
    title,
    options,
    onDismiss
  });
}
function yesOrNoButtons(yesLabel, cancelableLabel, yesFunction) {
  return [{
    text: cancelableLabel,
    style: 'cancel'
  }, {
    text: yesLabel,
    onPress: yesFunction
  }];
}
const Alert = {
  show: showAlert,
  withContent: showWithContent,
  chooseOptions: showChooseOptions,
  yesOrNoButtons,
  Provider: AlertProvider
};
export default Alert;
//# sourceMappingURL=index.js.map