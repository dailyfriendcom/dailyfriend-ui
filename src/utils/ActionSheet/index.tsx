import { EventRegister } from 'react-native-event-listeners';
import type { ActionSheetItemProps } from 'src/components/ActionSheet/ActionSheetItem';
import type { ActionSheetProps } from 'src/components/ActionSheet/ActionSheetWrapper';
import { ActionSheetOnCreate } from './ActionSheetEvents';
import ActionSheetProvider from './ActionSheetProvider';

export type ShowActionSheetProps = Pick<
  ActionSheetProps,
  'title' | 'description' | 'closeOnDragDown' | 'closeOnPressMask'
> & {
  options: ActionSheetItemProps[];
};

function showActionSheet(props: ShowActionSheetProps) {
  EventRegister.emit(ActionSheetOnCreate, props);
}

const ActionSheetUtils = {
  show: showActionSheet,
  Provider: ActionSheetProvider,
};

// Used inside ActionSheet component
export default ActionSheetUtils;
