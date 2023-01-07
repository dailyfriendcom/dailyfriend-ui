import React, { useCallback, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Appbar, Button, Searchbar, TextInput, useTheme } from 'react-native-paper';
import DialogUI from 'react-native-ui-lib/dialog';
import { PickerContext } from './PickerContext';
import PickerItem from './PickerItem';
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
  const theme = useTheme();

  /**
   * States
   */
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedItems, setSelectedItems] = useState(value);
  const [searchTerm, setSearchTerm] = useState('');

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
  const _renderPicker = useCallback(() => {
    const textLabel = Array.isArray(selectedItems) ? selectedItems.map(e => e.label).join(', ') : selectedItems === null || selectedItems === void 0 ? void 0 : selectedItems.label;
    if (renderPicker) {
      return renderPicker(textLabel, handleOpenModal, error);
    }
    return /*#__PURE__*/React.createElement(TouchableOpacity, {
      activeOpacity: 0.8,
      onPress: handleOpenModal
    }, /*#__PURE__*/React.createElement(View, {
      pointerEvents: "none"
    }, /*#__PURE__*/React.createElement(TextInput, {
      label: label,
      value: textLabel,
      mode: mode,
      right: /*#__PURE__*/React.createElement(TextInput.Icon, {
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
  return /*#__PURE__*/React.createElement(View, null, _renderPicker(), /*#__PURE__*/React.createElement(DialogUI, {
    visible: isModalOpened,
    onDismiss: handleCloseModal,
    width: "100%",
    height: `${modalMaxHeight}%`,
    containerStyle: modalMaxHeight !== 100 ? roundedTopRadius : null,
    bottom: true,
    useSafeArea: true
  }, /*#__PURE__*/React.createElement(View, {
    style: {
      backgroundColor: theme.colors.background,
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(Appbar.Header, {
    elevated: true,
    mode: "small",
    style: {
      marginTop: -20
    }
  }, /*#__PURE__*/React.createElement(Appbar.Action, {
    icon: "close",
    onPress: handleCloseModal
  }), /*#__PURE__*/React.createElement(Appbar.Content, {
    title: headerOptions.title
  }), multiSelect && /*#__PURE__*/React.createElement(Button, {
    onPress: handleSaveSelections
  }, "Salvar")), /*#__PURE__*/React.createElement(PickerContext.Provider, {
    value: {
      multiSelect,
      selectionLimit,
      selectedItems,
      searchTerm,
      onSelected: handleOnSelectedItem
    }
  }, showSearch && /*#__PURE__*/React.createElement(View, {
    style: {
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(Searchbar, {
    placeholder: searchPlaceholder,
    value: searchTerm,
    onChangeText: handleOnChangeSearchText
  })), /*#__PURE__*/React.createElement(ScrollView, null, children)))));
};

// @ts-expect-error
Picker.Item = PickerItem;
export default Picker;
//# sourceMappingURL=Picker.js.map