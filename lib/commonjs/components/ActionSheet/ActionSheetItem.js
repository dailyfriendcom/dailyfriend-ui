"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNativePaper = require("react-native-paper");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const ActionSheetItem = props => {
  const left = (0, _react.useMemo)(() => {
    if (props.icon) {
      return leftProps => /*#__PURE__*/_react.default.createElement(_reactNativePaper.List.Icon, _extends({}, leftProps, {
        icon: props.icon
      }));
    }
    return props.left;
  }, [props.left, props.icon]);
  const right = (0, _react.useMemo)(() => {
    if (props.iconRight) {
      return leftProps => /*#__PURE__*/_react.default.createElement(_reactNativePaper.List.Icon, _extends({}, leftProps, {
        icon: props.iconRight
      }));
    }
    return props.right;
  }, [props.right, props.iconRight]);

  // @ts-expect-error
  return /*#__PURE__*/_react.default.createElement(_reactNativePaper.List.Item, _extends({}, props, {
    left: left,
    right: right
  }));
};
var _default = ActionSheetItem;
exports.default = _default;
//# sourceMappingURL=ActionSheetItem.js.map