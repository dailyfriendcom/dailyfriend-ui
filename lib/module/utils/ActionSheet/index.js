import { EventRegister } from 'react-native-event-listeners';
import { ActionSheetOnCreate } from './ActionSheetEvents';
import ActionSheetProvider from './ActionSheetProvider';
function showActionSheet(props) {
  EventRegister.emit(ActionSheetOnCreate, props);
}
const ActionSheetUtils = {
  show: showActionSheet,
  Provider: ActionSheetProvider
};

// Used inside ActionSheet component
export default ActionSheetUtils;
//# sourceMappingURL=index.js.map