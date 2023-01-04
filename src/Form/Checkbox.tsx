import React, { useMemo } from 'react';

import { Controller, Control, ControllerProps } from 'react-hook-form';

import {
  Checkbox,
  CheckboxAndroidProps,
  CheckboxIOSProps,
  CheckboxItemProps,
  CheckboxProps,
  HelperText,
} from 'react-native-paper';

type CheckboxTypes =
  | CheckboxProps
  | CheckboxAndroidProps
  | CheckboxIOSProps
  | CheckboxItemProps;

export type FormCheckboxProps<T extends CheckboxTypes> = Partial<
  Omit<T, 'status' | 'onPress'>
> & {
  inputName: string;
  control: Control<any, any> | undefined;
  controllerOptions?: Partial<ControllerProps>;
  error?: string;
  checkboxComponent?: 'android' | 'ios' | 'item' | 'default';
};

const FormCheckbox = <T extends CheckboxTypes>({
  inputName,
  control,
  controllerOptions,
  error,
  checkboxComponent = 'default',
  ...props
}: FormCheckboxProps<T>) => {
  const CheckboxComponent = useMemo(() => {
    switch (checkboxComponent) {
      case 'android':
        return Checkbox.Android;
      case 'ios':
        return Checkbox.IOS;
      case 'item':
        return Checkbox.Item;
      default:
        return Checkbox;
    }
  }, [checkboxComponent]);

  return (
    <>
      <Controller
        {...controllerOptions}
        name={inputName}
        control={control}
        render={({ field: { onChange, value } }) => (
          // @ts-ignore
          <CheckboxComponent
            {...props}
            onPress={() => onChange(!value)}
            status={value ? 'checked' : 'unchecked'}
          />
        )}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </>
  );
};

export default FormCheckbox;
