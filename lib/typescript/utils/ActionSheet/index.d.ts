/// <reference types="react" />
import type { ActionSheetItemProps } from 'src/components/ActionSheet/ActionSheetItem';
import type { ActionSheetProps } from 'src/components/ActionSheet/ActionSheetWrapper';
export type ShowActionSheetProps = Pick<ActionSheetProps, 'title' | 'description' | 'closeOnDragDown' | 'closeOnPressMask'> & {
    options: ActionSheetItemProps[];
};
declare function showActionSheet(props: ShowActionSheetProps): void;
declare const ActionSheetUtils: {
    show: typeof showActionSheet;
    Provider: import("react").FC<{}>;
};
export default ActionSheetUtils;
//# sourceMappingURL=index.d.ts.map