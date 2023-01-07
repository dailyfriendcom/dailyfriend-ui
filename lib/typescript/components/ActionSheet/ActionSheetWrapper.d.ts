import React from 'react';
import ActionSheetItem from './ActionSheetItem';
export interface ActionSheetProps {
    visible: boolean;
    onDismiss: () => void;
    closeOnDragDown?: boolean;
    closeOnPressMask?: boolean;
    title?: string;
    description?: string;
}
declare const _default: React.FC<ActionSheetProps> & {
    Item: typeof ActionSheetItem;
};
export default _default;
//# sourceMappingURL=ActionSheetWrapper.d.ts.map