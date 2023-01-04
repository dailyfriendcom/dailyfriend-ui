import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import PickerUI from 'react-native-ui-lib/picker';

type PickerBaseProps = typeof PickerUI.defaultProps;

export type PickerProps = PickerBaseProps & {
  textInputStyleMode?: TextInputProps['mode'];
  error?: string;
};

class Picker extends React.Component<PickerProps, any, any> {
  static Item = PickerUI.Item;

  render() {
    const { textInputStyleMode, ...props } = this.props;

    return (
      <PickerUI
        renderPicker={(_: any, itemLabel: any) => (
          <TextInput
            label={props.placeholder}
            value={itemLabel}
            mode={textInputStyleMode}
            right={<TextInput.Icon icon="chevron-down" />}
            error={props.error !== undefined}
          />
        )}
        {...props}
      />
    );
  }
}

export default Picker;
