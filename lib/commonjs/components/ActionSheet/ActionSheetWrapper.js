"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativePaper = require("react-native-paper");
var _reactNativeUiLib = require("react-native-ui-lib");
var _ActionSheetItem = _interopRequireDefault(require("./ActionSheetItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
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
  const theme = (0, _reactNativePaper.useTheme)();
  const renderDraggableIcon = (0, _react.useCallback)(() => {
    if (!closeOnDragDown) return null;
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [styles.draggableIcon, {
        backgroundColor: theme.colors.onSurfaceDisabled
      }]
    });
  }, [closeOnDragDown, theme.colors.onSurfaceDisabled]);
  const renderHeader = (0, _react.useCallback)(() => {
    if (!title && !description) {
      return null;
    }
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        marginBottom: 16
      }
    }, title && /*#__PURE__*/_react.default.createElement(_reactNativePaper.Text, {
      variant: "headlineSmall"
    }, title), description && /*#__PURE__*/_react.default.createElement(_reactNativePaper.Text, {
      variant: "bodyMedium"
    }, description));
  }, [title, description]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeUiLib.Dialog, {
    bottom: true,
    centerH: true,
    width: "100%",
    panDirection: closeOnDragDown ? _reactNativeUiLib.PanningProvider.Directions.DOWN : undefined,
    useSafeArea: true,
    visible: visible,
    onDismiss: onDismiss,
    ignoreBackgroundPress: !closeOnPressMask
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: [styles.container, {
      backgroundColor: theme.colors.background,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24
    }]
  }, renderDraggableIcon(), renderHeader(), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      marginHorizontal: -16
    }
  }, _react.default.Children.map(children, child => {
    if ( /*#__PURE__*/_react.default.isValidElement(child)) {
      return /*#__PURE__*/_react.default.cloneElement(child, {
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
const styles = _reactNative.StyleSheet.create({
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
ActionSheet.Item = _ActionSheetItem.default;
var _default = ActionSheet;
exports.default = _default;
//# sourceMappingURL=ActionSheetWrapper.js.map