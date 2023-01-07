"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeEventListeners = require("react-native-event-listeners");
var _reactNativePaper = require("react-native-paper");
var _SnackbarEvents = require("./SnackbarEvents");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const SnackbarProvider = _ref => {
  let {
    children
  } = _ref;
  const [isVisible, setIsVisible] = (0, _react.useState)(false);
  const [currentSnackbar, setCurrentSnackbar] = (0, _react.useState)(null);
  const snackbarsQueue = (0, _react.useRef)([]);
  const listenSnackbarsRequest = (0, _react.useCallback)(() => {
    return _reactNativeEventListeners.EventRegister.addEventListener(_SnackbarEvents.SnackbarOnCreate, newSnackbar => {
      snackbarsQueue.current = [...snackbarsQueue.current, newSnackbar];
      if (snackbarsQueue.current.length === 1) {
        showSnackbar(newSnackbar);
      }
    });
  }, []);
  (0, _react.useEffect)(() => {
    const listen = listenSnackbarsRequest();
    return () => {
      _reactNativeEventListeners.EventRegister.removeEventListener(listen);
    };
  }, [listenSnackbarsRequest]);
  function showSnackbar(snackbar) {
    setCurrentSnackbar(snackbar);
    setIsVisible(true);
  }
  const showNextSnackbar = (0, _react.useCallback)(() => {
    snackbarsQueue.current.shift();
    if (snackbarsQueue.current.length > 0) {
      showSnackbar(snackbarsQueue.current[0]);
    }
  }, []);
  const handleDismiss = (0, _react.useCallback)(() => {
    setIsVisible(false);
    setTimeout(() => {
      showNextSnackbar();
    }, 200);
  }, [showNextSnackbar]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children, /*#__PURE__*/_react.default.createElement(_reactNativePaper.Snackbar, {
    visible: isVisible,
    onDismiss: handleDismiss,
    action: currentSnackbar === null || currentSnackbar === void 0 ? void 0 : currentSnackbar.action,
    duration: currentSnackbar === null || currentSnackbar === void 0 ? void 0 : currentSnackbar.duration
  }, currentSnackbar === null || currentSnackbar === void 0 ? void 0 : currentSnackbar.text));
};
var _default = SnackbarProvider;
exports.default = _default;
//# sourceMappingURL=SnackbarProvider.js.map