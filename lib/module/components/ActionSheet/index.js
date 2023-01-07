import { default as ActionSheet } from './ActionSheetWrapper';
import ActionSheetUtils from '../../utils/ActionSheet';

// @ts-expect-error
ActionSheet.show = ActionSheetUtils.show;

// @ts-expect-error
ActionSheet.Provider = ActionSheetUtils.Provider;
export default ActionSheet;
//# sourceMappingURL=index.js.map