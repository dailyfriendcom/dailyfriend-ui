import React from 'react';
import type { PickerProps } from './Picker';
import type { PickerItemProps } from './PickerItem';
export interface PickerContext {
    multiSelect: PickerProps['multiSelect'];
    selectionLimit: PickerProps['selectionLimit'];
    selectedItems: PickerItemProps | PickerItemProps[] | null;
    searchTerm: string;
    onSelected: (item: PickerItemProps) => void;
}
export declare const PickerContext: React.Context<PickerContext | null>;
//# sourceMappingURL=PickerContext.d.ts.map