import React from 'react';

import { Control, Controller, ControllerProps } from 'react-hook-form';

import { HelperText } from 'react-native-paper';
import type { PickerProps } from 'src/Picker';
import Picker from '../Picker';

export interface FormPicker
  extends Omit<PickerProps, 'value' | 'onChange' | 'onChangeText'> {
  inputName: string;
  control: Control<any, any> | undefined;
  controllerOptions?: Partial<ControllerProps>;
  error?: string;
}

const FormPicker: React.FC<FormPicker> = (props) => {
  return (
    <>
      <Controller
        {...props.controllerOptions}
        name={props.inputName}
        control={props.control}
        render={({ field: { onChange, onBlur, value } }) => (
          // @ts-ignore
          <Picker
            {...props}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={!!props.error}
            errorMessage={props.error}
          />
        )}
      />
      <HelperText type="error" visible={!!props.error}>
        {props.error}
      </HelperText>
    </>
  );
};

export default FormPicker;
