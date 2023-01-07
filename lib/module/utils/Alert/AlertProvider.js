import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Keyboard } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';
import { Button, Dialog, Portal, RadioButton, Text } from 'react-native-paper';
import { AlertOnCreate } from './AlertEvents';
const AlertProvider = _ref => {
  let {
    children
  } = _ref;
  const [isVisible, setIsVisible] = useState(false);
  const [currentAlert, setCurrentAlert] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const alertsQueue = useRef([]);
  const listenAlertsRequest = useCallback(() => {
    return EventRegister.addEventListener(AlertOnCreate, newAlert => {
      alertsQueue.current = [...alertsQueue.current, newAlert];
      if (alertsQueue.current.length === 1) {
        showAlert(newAlert);
      }
    });
  }, []);
  useEffect(() => {
    const listen = listenAlertsRequest();
    return () => {
      EventRegister.removeEventListener(listen);
    };
  }, [listenAlertsRequest]);
  function showAlert(alert) {
    Keyboard.dismiss();
    setCurrentAlert(alert);
    setIsVisible(true);
  }
  const showNextAlert = useCallback(() => {
    alertsQueue.current.shift();
    if (alertsQueue.current.length > 0) {
      showAlert(alertsQueue.current[0]);
    }
  }, []);
  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    setSelectedItem(null);
    showNextAlert();
  }, [showNextAlert]);
  const handleSelectItem = useCallback(() => {
    handleDismiss();
    currentAlert === null || currentAlert === void 0 ? void 0 : currentAlert.onDismiss(selectedItem);
  }, [currentAlert, handleDismiss, selectedItem]);

  /**
   * Renders
   */
  const renderContent = useCallback(() => {
    if ((currentAlert === null || currentAlert === void 0 ? void 0 : currentAlert.type) === 'chooseOptions') {
      var _currentAlert$options;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Dialog.ScrollArea, null, currentAlert === null || currentAlert === void 0 ? void 0 : (_currentAlert$options = currentAlert.options) === null || _currentAlert$options === void 0 ? void 0 : _currentAlert$options.map((option, index) => {
        return /*#__PURE__*/React.createElement(RadioButton.Item, {
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
    return /*#__PURE__*/React.createElement(Text, null, currentAlert === null || currentAlert === void 0 ? void 0 : currentAlert.message);
  }, [currentAlert, selectedItem]);
  const renderActions = useCallback(() => {
    var _currentAlert$buttons;
    if ((currentAlert === null || currentAlert === void 0 ? void 0 : currentAlert.type) === 'chooseOptions') {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
        onPress: handleDismiss
      }, "Cancelar"), /*#__PURE__*/React.createElement(Button, {
        onPress: handleSelectItem
      }, "Selecionar"));
    }
    return /*#__PURE__*/React.createElement(React.Fragment, null, currentAlert === null || currentAlert === void 0 ? void 0 : (_currentAlert$buttons = currentAlert.buttons) === null || _currentAlert$buttons === void 0 ? void 0 : _currentAlert$buttons.map((button, index) => {
      return /*#__PURE__*/React.createElement(Button, {
        key: index,
        onPress: () => {
          var _button$onPress;
          (_button$onPress = button.onPress) === null || _button$onPress === void 0 ? void 0 : _button$onPress.call(button);
          handleDismiss();
        }
      }, button.text);
    }));
  }, [currentAlert, handleSelectItem, handleDismiss]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, children, /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Dialog, {
    visible: isVisible,
    onDismiss: handleDismiss
  }, /*#__PURE__*/React.createElement(Dialog.Title, null, currentAlert === null || currentAlert === void 0 ? void 0 : currentAlert.title), /*#__PURE__*/React.createElement(Dialog.Content, null, renderContent()), /*#__PURE__*/React.createElement(Dialog.Actions, null, renderActions()))));
};
export default AlertProvider;
//# sourceMappingURL=AlertProvider.js.map