import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import PickerUI from 'react-native-ui-lib/picker';

type PickerBaseProps = typeof PickerUI.defaultProps;

type PickerProps = PickerBaseProps & {
  textInputStyleMode?: TextInputProps['mode'];
};

const Picker: React.FC<PickerProps> = ({ textInputStyleMode, ...props }) => {
  const [selected, setSelected] = React.useState<any>(null);

  return (
    // @ts-ignore
    <PickerUI
      value={selected}
      onChange={(selected) => setSelected(selected)}
      floatingPlaceholder
      enableModalBlur={false}
      topBarProps={{ title: 'Languages' }}
      showSearch
      searchPlaceholder={'Search a language'}
      migrateTextField
      renderPicker={(_: any, itemLabel: string) => (
        <TextInput
          label={props.placeholder}
          value={itemLabel}
          mode={textInputStyleMode}
          right={<TextInput.Icon icon="chevron-down" />}
        />
      )}
      {...props}
    >
      <PickerUI.Item label="JavaScript" value="js" />
      <PickerUI.Item label="Java" value="java" />
      <PickerUI.Item label="Python" value="python" />
      <PickerUI.Item label="C++" value="c++" disabled />
      <PickerUI.Item label="Perl" value="perl" />
    </PickerUI>
  );
};

export default Picker;
