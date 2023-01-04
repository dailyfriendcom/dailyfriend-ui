import React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';
import PickerUI from 'react-native-ui-lib/picker';

type PickerBaseProps = typeof PickerUI.defaultProps;

export type PickerProps = PickerBaseProps & {
  textInputStyleMode?: TextInputProps['mode'];
};

class Picker extends React.Component<PickerProps, any, any> {
  static Item = PickerUI.Item;

  render() {
    const { textInputStyleMode, ...props } = this.props;

    return (
      // @ts-ignore
      <PickerUI
        renderPicker={(_: any, itemLabel: string) => (
          <TextInput
            label={props.placeholder}
            value={itemLabel}
            mode={textInputStyleMode}
            right={<TextInput.Icon icon="chevron-down" />}
            error={props.error}
          />
        )}
        {...props}
      />
    );
  }
}

export default Picker;
