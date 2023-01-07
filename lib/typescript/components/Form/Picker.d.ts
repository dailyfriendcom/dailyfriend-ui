/// <reference types="react" />
import { Control, ControllerProps } from 'react-hook-form';
import { PickerProps } from '../Picker/Picker';
export type FormPicker = Omit<PickerProps, 'value' | 'onChange' | 'onChangeText' | 'onBlur' | 'error' | 'errorMessage'> & {
    inputName: string;
    control: Control<any, any> | undefined;
    controllerOptions?: Partial<ControllerProps>;
    error?: string;
};
declare const FormPicker: React.FC<FormPicker>;
export default FormPicker;
//# sourceMappingURL=Picker.d.ts.map