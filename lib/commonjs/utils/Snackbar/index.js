"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeEventListeners = require("react-native-event-listeners");
var _reactNativePaper = require("react-native-paper");
var _SnackbarEvents = require("./SnackbarEvents");
var _SnackbarProvider = _interopRequireDefault(require("./SnackbarProvider"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function showSnackbar(text) {
  let {
    action,
    duration
  } = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  _reactNativeEventListeners.EventRegister.emit(_SnackbarEvents.SnackbarOnCreate, {
    text,
    action,
    duration
  });
}

// @ts-expect-error
_reactNativePaper.Snackbar.show = showSnackbar;

// @ts-expect-error
_reactNativePaper.Snackbar.Provider = _SnackbarProvider.default;
var _default = _reactNativePaper.Snackbar;
exports.default = _default;
//# sourceMappingURL=index.js.map