import { Controller, Control, ControllerProps } from 'react-hook-form';

import {
  TextInput,
  TextInputAffixProps,
  TextInputIconProps,
  TextInputProps,
  HelperText,
  useTheme,
} from 'react-native-paper';

type TextInputPropsWithoutUnusedProps = Omit<
  TextInputProps,
  'error' | 'value' | 'onChangeText' | 'onBlur'
>;

type TextInputType = Partial<
  TextInputPropsWithoutUnusedProps & TextInputAffixProps & TextInputIconProps
>;

export interface FormTextInput extends TextInputType {
  inputName: string;
  control: Control<any, any> | undefined;
  controllerOptions?: Partial<ControllerProps>;
  error?: string;
}

const FormTextInput: React.FC<FormTextInput> = (props) => {
  const theme = useTheme();

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
            keyboardAppearance={theme.dark ? 'dark' : 'light'}
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
