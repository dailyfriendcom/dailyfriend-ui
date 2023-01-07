"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeEventListeners = require("react-native-event-listeners");
var _AlertEvents = require("./AlertEvents");
var _AlertProvider = _interopRequireDefault(require("./AlertProvider"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function showAlert(title, message, buttons) {
  _reactNativeEventListeners.EventRegister.emit(_AlertEvents.AlertOnCreate, {
    type: 'alert',
    title,
    message,
    buttons
  });
}
function showWithContent(title, customContent) {
  _reactNativeEventListeners.EventRegister.emit(_AlertEvents.AlertOnCreate, {
    type: 'alert',
    title,
    customContent
  });
}
function showChooseOptions(title, options, onDismiss) {
  _reactNativeEventListeners.EventRegister.emit(_AlertEvents.AlertOnCreate, {
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
  Provider: _AlertProvider.default
};
var _default = Alert;
exports.default = _default;
//# sourceMappingURL=index.js.map