"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativeEventListeners = require("react-native-event-listeners");
var _reactNativePaper = require("react-native-paper");
var _AlertEvents = require("./AlertEvents");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const AlertProvider = _ref => {
  let {
    children
  } = _ref;
  const [isVisible, setIsVisible] = (0, _react.useState)(false);
  const [currentAlert, setCurrentAlert] = (0, _react.useState)(null);
  const [selectedItem, setSelectedItem] = (0, _react.useState)(null);
  const alertsQueue = (0, _react.useRef)([]);
  const listenAlertsRequest = (0, _react.useCallback)(() => {
    return _reactNativeEventListeners.EventRegister.addEventListener(_AlertEvents.AlertOnCreate, newAlert => {
      alertsQueue.current = [...alertsQueue.current, newAlert];
      if (alertsQueue.current.length === 1) {
        showAlert(newAlert);
      }
    });
  }, []);
  (0, _react.useEffect)(() => {
    const listen = listenAlertsRequest();
    return () => {
      _reactNativeEventListeners.EventRegister.removeEventListener(listen);
    };
  }, [listenAlertsRequest]);
  function showAlert(alert) {
    _reactNative.Keyboard.dismiss();
    setCurrentAlert(alert);
    setIsVisible(true);
  }
  const showNextAlert = (0, _react.useCallback)(() => {
    alertsQueue.current.shift();
    if (alertsQueue.current.length > 0) {
      showAlert(alertsQueue.current[0]);
    }
  }, []);
  const handleDismiss = (0, _react.useCallback)(() => {
    setIsVisible(false);
    setSelectedItem(null);
    showNextAlert();
  }, [showNextAlert]);
  const handleSelectItem = (0, _react.useCallback)(() => {
    handleDismiss();
    currentAlert === null || currentAlert === void 0 ? void 0 : currentAlert.onDismiss(selectedItem);
  }, [currentAlert, handleDismiss, selectedItem]);

  /**
   * Renders
   */
  const renderContent = (0, _react.useCallback)(() => {
    if ((currentAlert === null || currentAlert === void 0 ? void 0 : currentAlert.type) === 'chooseOptions') {
      var _currentAlert$options;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNativePaper.Dialog.ScrollArea, null, currentAlert === null || currentAlert === void 0 ? void 0 : (_currentAlert$options = currentAlert.options) === null || _currentAlert$options === void 0 ? void 0 : _currentAlert$options.map((option, index) => {
        return /*#__PURE__*/_react.default.createElement(_reactNativePaper.RadioButton.Item, {
          key: index,
          label: option.label,
          value: option.value,
          status: selectedItem === option.value ? 'checked' : 'unchecked',
          onPress: () => setSelectedItem(option.value)
        }, option.label);
      })));
    }
    if (currentAlert !== null && currentAlert !== void 0 && currentAlert.customContent) {
      return currentAlert === null || currentAlert === void 0 ? void 0 : currentAlert.customContent;
    }
    return /*#__PURE__*/_react.default.createElement(_reactNativePaper.Text, null, currentAlert === null || currentAlert === void 0 ? void 0 : currentAlert.message);
  }, [currentAlert, selectedItem]);
  const renderActions = (0, _react.useCallback)(() => {
    var _currentAlert$buttons;
    if ((currentAlert === null || currentAlert === void 0 ? void 0 : currentAlert.type) === 'chooseOptions') {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNativePaper.Button, {
        onPress: handleDismiss
      }, "Cancelar"), /*#__PURE__*/_react.default.createElement(_reactNativePaper.Button, {
        onPress: handleSelectItem
      }, "Selecionar"));
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, currentAlert === null || currentAlert === void 0 ? void 0 : (_currentAlert$buttons = currentAlert.buttons) === null || _currentAlert$buttons === void 0 ? void 0 : _currentAlert$buttons.map((button, index) => {
      return /*#__PURE__*/_react.default.createElement(_reactNativePaper.Button, {
        key: index,
        onPress: () => {
          var _button$onPress;
          (_button$onPress = button.onPress) === null || _button$onPress === void 0 ? void 0 : _button$onPress.call(button);
          handleDismiss();
        }
      }, button.text);
    }));
  }, [currentAlert, handleSelectItem, handleDismiss]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children, /*#__PURE__*/_react.default.createElement(_reactNativePaper.Portal, null, /*#__PURE__*/_react.default.createElement(_reactNativePaper.Dialog, {
    visible: isVisible,
    onDismiss: handleDismiss
  }, /*#__PURE__*/_react.default.createElement(_reactNativePaper.Dialog.Title, null, currentAlert === null || currentAlert === void 0 ? void 0 : currentAlert.title), /*#__PURE__*/_react.default.createElement(_reactNativePaper.Dialog.Content, null, renderContent()), /*#__PURE__*/_react.default.createElement(_reactNativePaper.Dialog.Actions, null, renderActions()))));
};
var _default = AlertProvider;
exports.default = _default;
//# sourceMappingURL=AlertProvider.js.map