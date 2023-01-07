import { Controller, Control, ControllerProps } from 'react-hook-form';

import {
  SegmentedButtons,
  SegmentedButtonsProps,
  HelperText,
} from 'react-native-paper';

export type FormSegmentedButtonsProps = Omit<
  SegmentedButtonsProps,
  'value' | 'onValueChange'
> & {
  inputName: string;
  control: Control<any, any> | undefined;
  controllerOptions?: Partial<ControllerProps>;
  error?: string;
};

const FormSegmentedButtons: React.FC<FormSegmentedButtonsProps> = ({
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
          <SegmentedButtons {...props} value={value} onValueChange={onChange} />
        )}
      />
      <HelperText type="error" visible={!!error}>
        {error}
      </HelperText>
    </>
  );
};

export default FormSegmentedButtons;
