/// <reference types="react" />
import { Control, ControllerProps } from 'react-hook-form';
import { SegmentedButtonsProps } from 'react-native-paper';
export type FormSegmentedButtonsProps = Omit<SegmentedButtonsProps, 'value' | 'onValueChange'> & {
    inputName: string;
    control: Control<any, any> | undefined;
    controllerOptions?: Partial<ControllerProps>;
    error?: string;
};
declare const FormSegmentedButtons: React.FC<FormSegmentedButtonsProps>;
export default FormSegmentedButtons;
//# sourceMappingURL=SegmentedButtons.d.ts.map