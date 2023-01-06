import React, { useCallback, useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import {
  Appbar,
  Button,
  Searchbar,
  TextInput,
  TextInputProps,
  useTheme,
} from 'react-native-paper';
import DialogUI from 'react-native-ui-lib/dialog';
import { PickerContext } from './PickerContext';
import PickerItem from './PickerItem';
import type { PickerItemProps } from './PickerItem';

export type PickerProps = {
  value?: string | string[];
  onChange?: (value: PickerItemProps | PickerItemProps[]) => void;

  label?: string;
  mode?: TextInputProps['mode'];

  multiSelect?: boolean;
  selectionLimit?: number;

  error?: string;

  headerOptions?: {
    title?: string;
  };

  modalMaxHeight?: number;
  showSearch?: boolean;
  searchPlaceholder?: string;

  renderPicker?: (
    label: string | undefined,
    onPress: () => void,
    error: string | undefined
  ) => React.ReactNode;
};

const Picker: React.FC<PickerProps> = ({
  value,
  onChange,

  label,
  mode = 'flat',

  multiSelect = false,
  selectionLimit = 2,

  error,

  headerOptions = {
    title: 'Selecione...',
  },

  modalMaxHeight: _modalMaxHeight = 100,
  showSearch = false,
  searchPlaceholder = 'Pesquisar...',

  renderPicker,
  children,
}) => {
  const theme = useTheme();

  /**
   * States
   */
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<
    PickerItemProps | PickerItemProps[] | null
  >(value as any);
  const [searchTerm, setSearchTerm] = useState<string>('');

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
    handleOnChange(selectedItems as any);
    handleCloseModal();
  }

  function handleOnChange(items: PickerItemProps | PickerItemProps[]) {
    if (onChange) {
      onChange(items);
    }
  }

  function handleOnChangeSearchText(text: string) {
    setSearchTerm(text);
  }

  function handleOnSelectedItem(item: PickerItemProps) {
    if (!multiSelect) {
      setSelectedItems(item);
      handleOnChange(item);
      handleCloseModal();
    } else {
      setSelectedItems((oldSelectedItems) => {
        if (Array.isArray(oldSelectedItems)) {
          if (oldSelectedItems.includes(item)) {
            return oldSelectedItems.filter(
              (selectedItem) => selectedItem !== item
            );
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
    const textLabel = Array.isArray(selectedItems)
      ? selectedItems.map((e) => e.label).join(', ')
      : selectedItems?.label;

    if (renderPicker) {
      return renderPicker(textLabel, handleOpenModal, error);
    }

    return (
      <TouchableOpacity activeOpacity={0.8} onPress={handleOpenModal}>
        <View pointerEvents="none">
          <TextInput
            label={label}
            value={textLabel}
            mode={mode}
            right={<TextInput.Icon icon="chevron-down" />}
            error={error !== undefined}
          />
        </View>
      </TouchableOpacity>
    );
  }, [label, selectedItems, mode, error, renderPicker]);

  /**
   * Const vars
   */
  const roundedTopRadius = {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  };

  const modalMaxHeight = !showSearch ? _modalMaxHeight : 100;

  return (
    <View>
      {_renderPicker()}

      <DialogUI
        visible={isModalOpened}
        onDismiss={handleCloseModal}
        width="100%"
        height={`${modalMaxHeight}%`}
        containerStyle={modalMaxHeight !== 100 ? roundedTopRadius : null}
        bottom
        useSafeArea
      >
        <View
          style={{
            backgroundColor: theme.colors.background,
            height: '100%',
          }}
        >
          <Appbar.Header elevated mode="small" style={{ marginTop: -20 }}>
            <Appbar.Action icon="close" onPress={handleCloseModal} />
            <Appbar.Content title={headerOptions.title} />
            {multiSelect && (
              <Button onPress={handleSaveSelections}>Salvar</Button>
            )}
          </Appbar.Header>
          <PickerContext.Provider
            value={{
              multiSelect,
              selectionLimit,
              selectedItems,
              searchTerm,
              onSelected: handleOnSelectedItem,
            }}
          >
            {showSearch && (
              <View style={{ padding: 16 }}>
                <Searchbar
                  placeholder={searchPlaceholder}
                  value={searchTerm}
                  onChangeText={handleOnChangeSearchText}
                />
              </View>
            )}
            <ScrollView>{children}</ScrollView>
          </PickerContext.Provider>
        </View>
      </DialogUI>
    </View>
  );
};

// @ts-expect-error
Picker.Item = PickerItem;

export default Picker as typeof Picker & {
  Item: typeof PickerItem;
};
