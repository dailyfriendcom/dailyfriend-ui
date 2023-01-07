function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React, { useMemo } from 'react';
import { List } from 'react-native-paper';
const ActionSheetItem = props => {
  const left = useMemo(() => {
    if (props.icon) {
      return leftProps => /*#__PURE__*/React.createElement(List.Icon, _extends({}, leftProps, {
        icon: props.icon
      }));
    }
    return props.left;
  }, [props.left, props.icon]);
  const right = useMemo(() => {
    if (props.iconRight) {
      return leftProps => /*#__PURE__*/React.createElement(List.Icon, _extends({}, leftProps, {
        icon: props.iconRight
      }));
    }
    return props.right;
  }, [props.right, props.iconRight]);

  // @ts-expect-error
  return /*#__PURE__*/React.createElement(List.Item, _extends({}, props, {
    left: left,
    right: right
  }));
};
export default ActionSheetItem;
//# sourceMappingURL=ActionSheetItem.js.map