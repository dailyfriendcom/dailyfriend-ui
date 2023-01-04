import React from 'react';

import { Controller, Control, ControllerProps } from 'react-hook-form';

import {
  RadioButton,
  RadioButtonGroupProps,
  HelperText,
} from 'react-native-paper';

export type FormRadioButtonGroupProps = Partial<RadioButtonGroupProps> & {
  inputName: string;
  control: Control<any, any> | undefined;
  controllerOptions?: Partial<ControllerProps>;
  error?: string;
};

const FormRadioButtonGroup: React.FC<FormRadioButtonGroupProps> = ({
  inputName,
  control,
  controllerOptions,
  error,
  ...props
}) => {
  return (
    <>
      <Controller
        {...controllerOptions}
        name={inputName}
        control={control}
        render={({ field: { onChange, value } }) => (
          <RadioButton.Group {...props} value={value} onValueChange={onChange}>
            {props.children}
          </RadioButton.Group>
        )}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </>
  );
};

export default FormRadioButtonGroup;
