import React from 'react';
import type { PickerProps } from './Picker';
import type { PickerItemProps } from './PickerItem';

export interface PickerContext {
  multiSelect: PickerProps['multiSelect'];
  selectionLimit: PickerProps['selectionLimit'];
  selectedItems: PickerItemProps | PickerItemProps[] | null;
  onSelected: (item: PickerItemProps) => void;
}

export const PickerContext = React.createContext<PickerContext | null>(null);
