import React, { useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  Appbar,
  Button,
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
};

const Picker: React.FC<PickerProps> = ({
  mode = 'flat',
  label,
  multiSelect = false,
  selectionLimit = 2,
  error,
  headerOptions = {
    title: 'Selecione...',
  },
  onChange,
  value,
  modalMaxHeight,
  children,
}) => {
  const theme = useTheme();

  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [selectedItems, setSelectedItems] = useState<
    PickerItemProps | PickerItemProps[] | null
  >(value as any);

  function handleOpenModal() {
    setIsModalOpened(true);
  }

  function handleCloseModal() {
    setIsModalOpened(false);
  }

  function handleSaveSelections() {
    handleOnChange(selectedItems as any);
    handleCloseModal();
  }

  function onSelectedItem(item: PickerItemProps) {
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

  function handleOnChange(items: PickerItemProps | PickerItemProps[]) {
    if (onChange) {
      onChange(items);
    }
  }

  const roundedTopRadius = {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.8} onPress={handleOpenModal}>
        <View pointerEvents="none">
          <TextInput
            label={label}
            value={
              Array.isArray(selectedItems)
                ? selectedItems.map((e) => e.label).join(', ')
                : selectedItems?.label
            }
            mode={mode}
            right={<TextInput.Icon icon="chevron-down" />}
            error={error !== undefined}
          />
        </View>
      </TouchableOpacity>

      <DialogUI
        visible={isModalOpened}
        onDismiss={handleCloseModal}
        width="100%"
        height={modalMaxHeight ? `${modalMaxHeight}%` : '100%'}
        containerStyle={modalMaxHeight ? roundedTopRadius : null}
        bottom
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
              onSelected: onSelectedItem,
            }}
          >
            {children}
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
