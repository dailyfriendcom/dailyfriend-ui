/// <reference types="react" />
import { Control, ControllerProps } from 'react-hook-form';
import { RadioButtonGroupProps } from 'react-native-paper';
export type FormRadioButtonGroupProps = Partial<Omit<RadioButtonGroupProps, 'value' | 'onValueChange'>> & {
    inputName: string;
    control: Control<any, any> | undefined;
    controllerOptions?: Partial<ControllerProps>;
    error?: string;
};
declare const FormRadioButtonGroup: React.FC<FormRadioButtonGroupProps>;
export default FormRadioButtonGroup;
//# sourceMappingURL=RadioButtonGroup.d.ts.map