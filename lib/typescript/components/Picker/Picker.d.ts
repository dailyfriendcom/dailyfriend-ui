import React from 'react';
import { TextInputProps } from 'react-native-paper';
import PickerItem from './PickerItem';
import type { PickerItemProps } from './PickerItem';
export type PickerProps = {
    value?: string | string[];
    onChange?: (value: PickerItemProps | PickerItemProps[]) => void;
    label?: string;
    mode?: TextInputProps['mode'];
    multiSelect?: boolean;
    selectionLimit?: number;
    error?: string;
    headerOptions?: {
        title?: string;
    };
    modalMaxHeight?: number;
    showSearch?: boolean;
    searchPlaceholder?: string;
    renderPicker?: (label: string | undefined, onPress: () => void, error: string | undefined) => React.ReactNode;
};
declare const _default: React.FC<PickerProps> & {
    Item: typeof PickerItem;
};
export default _default;
//# sourceMappingURL=Picker.d.ts.map