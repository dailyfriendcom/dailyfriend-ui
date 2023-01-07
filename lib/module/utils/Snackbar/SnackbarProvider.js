import React, { useCallback, useEffect, useRef, useState } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import { Snackbar } from 'react-native-paper';
import { SnackbarOnCreate } from './SnackbarEvents';
const SnackbarProvider = _ref => {
  let {
    children
  } = _ref;
  const [isVisible, setIsVisible] = useState(false);
  const [currentSnackbar, setCurrentSnackbar] = useState(null);
  const snackbarsQueue = useRef([]);
  const listenSnackbarsRequest = useCallback(() => {
    return EventRegister.addEventListener(SnackbarOnCreate, newSnackbar => {
      snackbarsQueue.current = [...snackbarsQueue.current, newSnackbar];
      if (snackbarsQueue.current.length === 1) {
        showSnackbar(newSnackbar);
      }
    });
  }, []);
  useEffect(() => {
    const listen = listenSnackbarsRequest();
    return () => {
      EventRegister.removeEventListener(listen);
    };
  }, [listenSnackbarsRequest]);
  function showSnackbar(snackbar) {
    setCurrentSnackbar(snackbar);
    setIsVisible(true);
  }
  const showNextSnackbar = useCallback(() => {
    snackbarsQueue.current.shift();
    if (snackbarsQueue.current.length > 0) {
      showSnackbar(snackbarsQueue.current[0]);
    }
  }, []);
  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      showNextSnackbar();
    }, 200);
  }, [showNextSnackbar]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, children, /*#__PURE__*/React.createElement(Snackbar, {
    visible: isVisible,
    onDismiss: handleDismiss,
    action: currentSnackbar === null || currentSnackbar === void 0 ? void 0 : currentSnackbar.action,
    duration: currentSnackbar === null || currentSnackbar === void 0 ? void 0 : currentSnackbar.duration
  }, currentSnackbar === null || currentSnackbar === void 0 ? void 0 : currentSnackbar.text));
};
export default SnackbarProvider;
//# sourceMappingURL=SnackbarProvider.js.map