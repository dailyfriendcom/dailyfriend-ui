import React, { useContext } from 'react';
import { View } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';
import { PickerContext } from './PickerContext';

export interface PickerItemProps {
  label: string;
  value: string;
  disabled?: boolean;
}

const PickerItem: React.FC<PickerItemProps> = ({ label, value, disabled }) => {
  const context = useContext(PickerContext);

  if (!context) return <View />;

  if (
    context.searchTerm.length > 0 &&
    !label.toLowerCase().includes(context.searchTerm.toLowerCase())
  )
    return <View />;

  if (context?.multiSelect) {
    const selectedItems = context.selectedItems as PickerItemProps[];

    const isSelected = selectedItems?.map((e) => e.value).includes(value);

    const isDisabled = context.selectedItems
      ? selectedItems.length >= context.selectionLimit! && !isSelected
      : false;

    return (
      <Checkbox.Item
        label={label}
        status={isSelected ? 'checked' : 'unchecked'}
        disabled={disabled || isDisabled}
        onPress={() => context.onSelected({ label, value, disabled })}
      />
    );
  } else {
    const selectedItem = context?.selectedItems as PickerItemProps | null;

    return (
      <RadioButton.Item
        label={label}
        value={value}
        status={selectedItem?.value === value ? 'checked' : 'unchecked'}
        disabled={disabled}
        onPress={() => context.onSelected({ label, value, disabled })}
      />
    );
  }
};

export default PickerItem;
