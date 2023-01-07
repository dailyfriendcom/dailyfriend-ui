function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { EventRegister } from 'react-native-event-listeners';
import ActionSheet from '../../components/ActionSheet/ActionSheetWrapper';
import { ActionSheetOnCreate } from './ActionSheetEvents';
const ActionSheetProvider = _ref => {
  let {
    children
  } = _ref;
  const [isVisible, setIsVisible] = useState(false);
  const [currentActionSheet, setCurrentActionSheet] = useState(null);
  const actionSheetQueue = useRef([]);
  const listenActionSheetsRequest = useCallback(() => {
    return EventRegister.addEventListener(ActionSheetOnCreate, newActionSheet => {
      actionSheetQueue.current = [...actionSheetQueue.current, newActionSheet];
      if (actionSheetQueue.current.length === 1) {
        showActionSheet(newActionSheet);
      }
    });
  }, []);
  useEffect(() => {
    const listen = listenActionSheetsRequest();
    return () => {
      EventRegister.removeEventListener(listen);
    };
  }, [listenActionSheetsRequest]);
  function showActionSheet(actionSheet) {
    setCurrentActionSheet(actionSheet);
    setIsVisible(true);
  }
  const showNextActionSheet = useCallback(() => {
    actionSheetQueue.current.shift();
    if (actionSheetQueue.current.length > 0) {
      showActionSheet(actionSheetQueue.current[0]);
    }
  }, []);
  const handleDismiss = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      showNextActionSheet();
    }, 500);
  }, [showNextActionSheet]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, children, /*#__PURE__*/React.createElement(ActionSheet, _extends({}, currentActionSheet, {
    visible: isVisible,
    onDismiss: handleDismiss
  }), currentActionSheet === null || currentActionSheet === void 0 ? void 0 : currentActionSheet.options.map((option, index) => /*#__PURE__*/React.createElement(ActionSheet.Item, _extends({
    key: index
  }, option)))));
};
export default ActionSheetProvider;
//# sourceMappingURL=ActionSheetProvider.js.map