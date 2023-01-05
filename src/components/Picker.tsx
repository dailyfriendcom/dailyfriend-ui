import React, { useContext, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import {
  Appbar,
  Button,
  Checkbox,
  RadioButton,
  TextInput,
  TextInputProps,
  useTheme,
} from 'react-native-paper';
import DialogUI from 'react-native-ui-lib/dialog';

export type PickerProps = {
  mode?: TextInputProps['mode'];
  label?: string;
  multiSelect?: boolean;
  selectionLimit?: number;
  error?: string;
  headerOptions?: {
    title?: string;
  };
  onChange?: (value: PickerItemProps | PickerItemProps[]) => void;
  value?: string | string[];
};

interface PickerContext {
  multiSelect: PickerProps['multiSelect'];
  selectionLimit: PickerProps['selectionLimit'];
  selectedItems: PickerItemProps | PickerItemProps[] | null;
  onSelected: (item: PickerItemProps) => void;
}

const PickerContext = React.createContext<PickerContext | null>(null);

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

  return (
    <View>
      <TouchableOpacity onPress={handleOpenModal}>
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
        height="100%"
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

interface PickerItemProps {
  label: string;
  value: string;
  disabled?: boolean;
}

const PickerItem: React.FC<PickerItemProps> = ({ label, value, disabled }) => {
  const context = useContext(PickerContext);

  if (!context) return <View />;

  if (context?.multiSelect) {
    const selectedItems = context.selectedItems as PickerItemProps[];

    const isSelected = selectedItems?.map((e) => e.value).includes(value);

    const isDisabled = context.selectedItems
      ? selectedItems.length >= context.selectionLimit! && !isSelected
      : false;

    return (
      <Checkbox.Item
        label={label}
        status={isSelected ? 'checked' : 'unchecked'}
        disabled={disabled || isDisabled}
        onPress={() => context.onSelected({ label, value, disabled })}
      />
    );
  } else {
    const selectedItem = context?.selectedItems as PickerItemProps | null;

    return (
      <RadioButton.Item
        label={label}
        value={value}
        status={selectedItem?.value === value ? 'checked' : 'unchecked'}
        disabled={disabled}
        onPress={() => context.onSelected({ label, value, disabled })}
      />
    );
  }
};

// @ts-expect-error
Picker.Item = PickerItem;

export default Picker as typeof Picker & {
  Item: typeof PickerItem;
};
