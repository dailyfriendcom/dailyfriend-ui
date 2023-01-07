/// <reference types="react" />
import { Control, ControllerProps } from 'react-hook-form';
import { TextInputAffixProps, TextInputIconProps, TextInputProps } from 'react-native-paper';
type TextInputPropsWithoutUnusedProps = Omit<TextInputProps, 'error' | 'value' | 'onChangeText' | 'onBlur'>;
type TextInputType = Partial<TextInputPropsWithoutUnusedProps & TextInputAffixProps & TextInputIconProps>;
export interface FormTextInput extends TextInputType {
    inputName: string;
    control: Control<any, any> | undefined;
    controllerOptions?: Partial<ControllerProps>;
    error?: string;
}
declare const FormTextInput: React.FC<FormTextInput>;
export default FormTextInput;
//# sourceMappingURL=TextInput.d.ts.map