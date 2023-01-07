"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
var _Assets = _interopRequireDefault(require("../utils/Assets"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Image = _ref => {
  let {
    assetName,
    assetGroup,
    ...props
  } = _ref;
  const source = assetName ? _Assets.default.getAsset(assetName, assetGroup) : props.source;
  return /*#__PURE__*/React.createElement(_reactNative.Image, _extends({
    source: source
  }, props));
};
var _default = Image;
exports.default = _default;
//# sourceMappingURL=Image.js.map