"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativePaper = require("react-native-paper");
var _PickerContext = require("./PickerContext");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const PickerItem = _ref => {
  let {
    label,
    value,
    disabled
  } = _ref;
  const context = (0, _react.useContext)(_PickerContext.PickerContext);
  if (!context) return /*#__PURE__*/_react.default.createElement(_reactNative.View, null);
  if (context.searchTerm.length > 0 && !label.toLowerCase().includes(context.searchTerm.toLowerCase())) return /*#__PURE__*/_react.default.createElement(_reactNative.View, null);
  if (context !== null && context !== void 0 && context.multiSelect) {
    const selectedItems = context.selectedItems;
    const isSelected = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.map(e => e.value).includes(value);
    const isDisabled = context.selectedItems ? selectedItems.length >= context.selectionLimit && !isSelected : false;
    return /*#__PURE__*/_react.default.createElement(_reactNativePaper.Checkbox.Item, {
      label: label,
      status: isSelected ? 'checked' : 'unchecked',
      disabled: disabled || isDisabled,
      onPress: () => context.onSelected({
        label,
        value,
        disabled
      })
    });
  } else {
    const selectedItem = context === null || context === void 0 ? void 0 : context.selectedItems;
    return /*#__PURE__*/_react.default.createElement(_reactNativePaper.RadioButton.Item, {
      label: label,
      value: value,
      status: (selectedItem === null || selectedItem === void 0 ? void 0 : selectedItem.value) === value ? 'checked' : 'unchecked',
      disabled: disabled,
      onPress: () => context.onSelected({
        label,
        value,
        disabled
      })
    });
  }
};
var _default = PickerItem;
exports.default = _default;
//# sourceMappingURL=PickerItem.js.map