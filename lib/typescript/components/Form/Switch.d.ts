/// <reference types="react" />
import { Control, ControllerProps } from 'react-hook-form';
import { SwitchProps } from 'react-native-paper';
export type FormSwitchProps = Partial<Omit<SwitchProps, 'value' | 'onValueChange'>> & {
    inputName: string;
    control: Control<any, any> | undefined;
    controllerOptions?: Partial<ControllerProps>;
    error?: string;
};
declare const FormSwitch: React.FC<FormSwitchProps>;
export default FormSwitch;
//# sourceMappingURL=Switch.d.ts.map