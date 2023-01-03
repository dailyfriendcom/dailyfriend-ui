import React from 'react';

import { Controller, Control, ControllerProps } from 'react-hook-form';

import {
  TextInput,
  TextInputAffixProps,
  TextInputIconProps,
  TextInputProps,
  HelperText,
} from 'react-native-paper';

type TextInputType = Partial<
  Omit<TextInputProps, 'error'> & TextInputAffixProps & TextInputIconProps
>;

export interface FormTextInput extends TextInputType {
  inputName: string;
  control: Control<any, any> | undefined;
  controllerOptions?: Partial<ControllerProps>;
  error?: string;
}

const FormTextInput: React.FC<FormTextInput> = (props) => {
  return (
    <>
      <Controller
        {...props.controllerOptions}
        name={props.inputName}
        control={props.control}
        render={({ field: { onChange, onBlur, value } }) => (
          // @ts-ignore
          <TextInput
            {...props}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      <HelperText type="error" visible={!!props.error}>
        {props.error}
      </HelperText>
    </>
  );
};

export default FormTextInput;