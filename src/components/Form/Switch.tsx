import React from 'react';

import { Controller, Control, ControllerProps } from 'react-hook-form';

import { Switch, SwitchProps, HelperText } from 'react-native-paper';

export type FormSwitchProps = Partial<
  Omit<SwitchProps, 'value' | 'onValueChange'>
> & {
  inputName: string;
  control: Control<any, any> | undefined;
  controllerOptions?: Partial<ControllerProps>;
  error?: string;
};

const FormSwitch: React.FC<FormSwitchProps> = ({
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
        defaultValue={false}
        render={({ field: { onChange, value } }) => (
          <Switch
            {...props}
            value={value}
            onValueChange={() => onChange(!value)}
          />
        )}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </>
  );
};

export default FormSwitch;
