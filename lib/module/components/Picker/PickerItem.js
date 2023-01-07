import React, { useContext } from 'react';
import { View } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';
import { PickerContext } from './PickerContext';
const PickerItem = _ref => {
  let {
    label,
    value,
    disabled
  } = _ref;
  const context = useContext(PickerContext);
  if (!context) return /*#__PURE__*/React.createElement(View, null);
  if (context.searchTerm.length > 0 && !label.toLowerCase().includes(context.searchTerm.toLowerCase())) return /*#__PURE__*/React.createElement(View, null);
  if (context !== null && context !== void 0 && context.multiSelect) {
    const selectedItems = context.selectedItems;
    const isSelected = selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.map(e => e.value).includes(value);
    const isDisabled = context.selectedItems ? selectedItems.length >= context.selectionLimit && !isSelected : false;
    return /*#__PURE__*/React.createElement(Checkbox.Item, {
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
    return /*#__PURE__*/React.createElement(RadioButton.Item, {
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
export default PickerItem;
//# sourceMappingURL=PickerItem.js.map