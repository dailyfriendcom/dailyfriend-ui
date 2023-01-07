import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { Dialog, PanningProvider } from 'react-native-ui-lib';
import ActionSheetItem from './ActionSheetItem';
const ActionSheet = _ref => {
  let {
    visible,
    onDismiss,
    closeOnDragDown = true,
    closeOnPressMask = true,
    title,
    description,
    children
  } = _ref;
  const theme = useTheme();
  const renderDraggableIcon = useCallback(() => {
    if (!closeOnDragDown) return null;
    return /*#__PURE__*/React.createElement(View, {
      style: [styles.draggableIcon, {
        backgroundColor: theme.colors.onSurfaceDisabled
      }]
    });
  }, [closeOnDragDown, theme.colors.onSurfaceDisabled]);
  const renderHeader = useCallback(() => {
    if (!title && !description) {
      return null;
    }
    return /*#__PURE__*/React.createElement(View, {
      style: {
        marginBottom: 16
      }
    }, title && /*#__PURE__*/React.createElement(Text, {
      variant: "headlineSmall"
    }, title), description && /*#__PURE__*/React.createElement(Text, {
      variant: "bodyMedium"
    }, description));
  }, [title, description]);
  return /*#__PURE__*/React.createElement(Dialog, {
    bottom: true,
    centerH: true,
    width: "100%",
    panDirection: closeOnDragDown ? PanningProvider.Directions.DOWN : undefined,
    useSafeArea: true,
    visible: visible,
    onDismiss: onDismiss,
    ignoreBackgroundPress: !closeOnPressMask
  }, /*#__PURE__*/React.createElement(View, {
    style: [styles.container, {
      backgroundColor: theme.colors.background,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24
    }]
  }, renderDraggableIcon(), renderHeader(), /*#__PURE__*/React.createElement(View, {
    style: {
      marginHorizontal: -16
    }
  }, React.Children.map(children, child => {
    if ( /*#__PURE__*/React.isValidElement(child)) {
      return /*#__PURE__*/React.cloneElement(child, {
        onPress: () => {
          var _child$props$onPress, _child$props;
          onDismiss();
          (_child$props$onPress = (_child$props = child.props).onPress) === null || _child$props$onPress === void 0 ? void 0 : _child$props$onPress.call(_child$props);
        }
      });
    }
    return child;
  }))));
};
const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  draggableIcon: {
    width: 40,
    height: 5,
    marginBottom: 5,
    borderRadius: 3,
    alignSelf: 'center'
  }
});

// @ts-expect-error
ActionSheet.Item = ActionSheetItem;
export default ActionSheet;
//# sourceMappingURL=ActionSheetWrapper.js.map