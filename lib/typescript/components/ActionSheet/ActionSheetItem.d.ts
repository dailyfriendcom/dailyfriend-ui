import React from 'react';
import { ListItemProps, ListIconProps } from 'react-native-paper';
export type ActionSheetItemProps = Partial<ListItemProps> & {
    icon?: ListIconProps['icon'];
    iconRight?: ListIconProps['icon'];
};
declare const ActionSheetItem: React.FC<ActionSheetItemProps>;
export default ActionSheetItem;
//# sourceMappingURL=ActionSheetItem.d.ts.map