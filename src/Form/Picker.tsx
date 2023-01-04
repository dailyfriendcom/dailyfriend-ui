import React from 'react';

import { Control, Controller, ControllerProps } from 'react-hook-form';

import { HelperText } from 'react-native-paper';
import Picker, { PickerProps } from '../Picker';

export type FormPicker = Omit<
  PickerProps,
  'value' | 'onChange' | 'onChangeText'
> & {
  inputName: string;
  control: Control<any, any> | undefined;
  controllerOptions?: Partial<ControllerProps>;
  error?: string;
};

const FormPicker: React.FC<FormPicker> = ({
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
        render={({ field: { onChange, onBlur, value } }) => (
          // @ts-ignore
          <Picker
            {...props}
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            error={error}
            errorMessage={error}
          />
        )}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </>
  );
};

export default FormPicker;