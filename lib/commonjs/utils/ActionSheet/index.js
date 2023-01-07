"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNativeEventListeners = require("react-native-event-listeners");
var _ActionSheetEvents = require("./ActionSheetEvents");
var _ActionSheetProvider = _interopRequireDefault(require("./ActionSheetProvider"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function showActionSheet(props) {
  _reactNativeEventListeners.EventRegister.emit(_ActionSheetEvents.ActionSheetOnCreate, props);
}
const ActionSheetUtils = {
  show: showActionSheet,
  Provider: _ActionSheetProvider.default
};

// Used inside ActionSheet component
var _default = ActionSheetUtils;
exports.default = _default;
//# sourceMappingURL=index.js.map