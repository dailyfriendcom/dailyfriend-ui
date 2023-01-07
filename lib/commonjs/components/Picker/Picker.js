"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativePaper = require("react-native-paper");
var _dialog = _interopRequireDefault(require("react-native-ui-lib/dialog"));
var _PickerContext = require("./PickerContext");
var _PickerItem = _interopRequireDefault(require("./PickerItem"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const Picker = _ref => {
  let {
    value,
    onChange,
    label,
    mode = 'flat',
    multiSelect = false,
    selectionLimit = 2,
    error,
    headerOptions = {
      title: 'Selecione...'
    },
    modalMaxHeight: _modalMaxHeight = 100,
    showSearch = false,
    searchPlaceholder = 'Pesquisar...',
    renderPicker,
    children
  } = _ref;
  const theme = (0, _reactNativePaper.useTheme)();

  /**
   * States
   */
  const [isModalOpened, setIsModalOpened] = (0, _react.useState)(false);
  const [selectedItems, setSelectedItems] = (0, _react.useState)(value);
  const [searchTerm, setSearchTerm] = (0, _react.useState)('');

  /**
   * Handles
   */
  function handleOpenModal() {
    setIsModalOpened(true);
  }
  function handleCloseModal() {
    setIsModalOpened(false);
    setSearchTerm('');
  }
  function handleSaveSelections() {
    handleOnChange(selectedItems);
    handleCloseModal();
  }
  function handleOnChange(items) {
    if (onChange) {
      onChange(items);
    }
  }
  function handleOnChangeSearchText(text) {
    setSearchTerm(text);
  }
  function handleOnSelectedItem(item) {
    if (!multiSelect) {
      setSelectedItems(item);
      handleOnChange(item);
      handleCloseModal();
    } else {
      setSelectedItems(oldSelectedItems => {
        if (Array.isArray(oldSelectedItems)) {
          if (oldSelectedItems.includes(item)) {
            return oldSelectedItems.filter(selectedItem => selectedItem !== item);
          } else {
            return [...oldSelectedItems, item];
          }
        } else {
          return [item];
        }
      });
    }
  }

  /**
   * Renders
   */
  const _renderPicker = (0, _react.useCallback)(() => {
    const textLabel = Array.isArray(selectedItems) ? selectedItems.map(e => e.label).join(', ') : selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.label;
    if (renderPicker) {
      return renderPicker(textLabel, handleOpenModal, error);
    }
    return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      activeOpacity: 0.8,
      onPress: handleOpenModal
    }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      pointerEvents: "none"
    }, /*#__PURE__*/_react.default.createElement(_reactNativePaper.TextInput, {
      label: label,
      value: textLabel,
      mode: mode,
      right: /*#__PURE__*/_react.default.createElement(_reactNativePaper.TextInput.Icon, {
        icon: "chevron-down"
      }),
      error: error !== undefined
    })));
  }, [label, selectedItems, mode, error, renderPicker]);

  /**
   * Const vars
   */
  const roundedTopRadius = {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24
  };
  const modalMaxHeight = !showSearch ? _modalMaxHeight : 100;
  return /*#__PURE__*/_react.default.createElement(_reactNative.View, null, _renderPicker(), /*#__PURE__*/_react.default.createElement(_dialog.default, {
    visible: isModalOpened,
    onDismiss: handleCloseModal,
    width: "100%",
    height: `${modalMaxHeight}%`,
    containerStyle: modalMaxHeight !== 100 ? roundedTopRadius : null,
    bottom: true,
    useSafeArea: true
  }, /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      backgroundColor: theme.colors.background,
      height: '100%'
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativePaper.Appbar.Header, {
    elevated: true,
    mode: "small",
    style: {
      marginTop: -20
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativePaper.Appbar.Action, {
    icon: "close",
    onPress: handleCloseModal
  }), /*#__PURE__*/_react.default.createElement(_reactNativePaper.Appbar.Content, {
    title: headerOptions.title
  }), multiSelect && /*#__PURE__*/_react.default.createElement(_reactNativePaper.Button, {
    onPress: handleSaveSelections
  }, "Salvar")), /*#__PURE__*/_react.default.createElement(_PickerContext.PickerContext.Provider, {
    value: {
      multiSelect,
      selectionLimit,
      selectedItems,
      searchTerm,
      onSelected: handleOnSelectedItem
    }
  }, showSearch && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/_react.default.createElement(_reactNativePaper.Searchbar, {
    placeholder: searchPlaceholder,
    value: searchTerm,
    onChangeText: handleOnChangeSearchText
  })), /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, null, children)))));
};

// @ts-expect-error
Picker.Item = _PickerItem.default;
var _default = Picker;
exports.default = _default;
//# sourceMappingURL=Picker.js.map