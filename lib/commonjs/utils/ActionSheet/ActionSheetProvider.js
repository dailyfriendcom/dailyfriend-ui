"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativeEventListeners = require("react-native-event-listeners");
var _ActionSheetWrapper = _interopRequireDefault(require("../../components/ActionSheet/ActionSheetWrapper"));
var _ActionSheetEvents = require("./ActionSheetEvents");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ActionSheetProvider = _ref => {
  let {
    children
  } = _ref;
  const [isVisible, setIsVisible] = (0, _react.useState)(false);
  const [currentActionSheet, setCurrentActionSheet] = (0, _react.useState)(null);
  const actionSheetQueue = (0, _react.useRef)([]);
  const listenActionSheetsRequest = (0, _react.useCallback)(() => {
    return _reactNativeEventListeners.EventRegister.addEventListener(_ActionSheetEvents.ActionSheetOnCreate, newActionSheet => {
      actionSheetQueue.current = [...actionSheetQueue.current, newActionSheet];
      if (actionSheetQueue.current.length === 1) {
        showActionSheet(newActionSheet);
      }
    });
  }, []);
  (0, _react.useEffect)(() => {
    const listen = listenActionSheetsRequest();
    return () => {
      _reactNativeEventListeners.EventRegister.removeEventListener(listen);
    };
  }, [listenActionSheetsRequest]);
  function showActionSheet(actionSheet) {
    setCurrentActionSheet(actionSheet);
    setIsVisible(true);
  }
  const showNextActionSheet = (0, _react.useCallback)(() => {
    actionSheetQueue.current.shift();
    if (actionSheetQueue.current.length > 0) {
      showActionSheet(actionSheetQueue.current[0]);
    }
  }, []);
  const handleDismiss = (0, _react.useCallback)(() => {
    setIsVisible(false);
    setTimeout(() => {
      showNextActionSheet();
    }, 500);
  }, [showNextActionSheet]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children, /*#__PURE__*/_react.default.createElement(_ActionSheetWrapper.default, _extends({}, currentActionSheet, {
    visible: isVisible,
    onDismiss: handleDismiss
  }), currentActionSheet === null || currentActionSheet === void 0 ? void 0 : currentActionSheet.options.map((option, index) => /*#__PURE__*/_react.default.createElement(_ActionSheetWrapper.default.Item, _extends({
    key: index
  }, option)))));
};
var _default = ActionSheetProvider;
exports.default = _default;
//# sourceMappingURL=ActionSheetProvider.js.map