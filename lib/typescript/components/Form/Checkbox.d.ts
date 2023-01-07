import { Control, ControllerProps } from 'react-hook-form';
import { CheckboxAndroidProps, CheckboxIOSProps, CheckboxItemProps, CheckboxProps } from 'react-native-paper';
type CheckboxTypes = CheckboxProps | CheckboxAndroidProps | CheckboxIOSProps | CheckboxItemProps;
export type FormCheckboxProps<T extends CheckboxTypes> = Partial<Omit<T, 'status' | 'onPress'>> & {
    inputName: string;
    control: Control<any, any> | undefined;
    controllerOptions?: Partial<ControllerProps>;
    error?: string;
    checkboxComponent?: 'android' | 'ios' | 'item' | 'default';
};
declare const FormCheckbox: <T extends CheckboxTypes>({ inputName, control, controllerOptions, error, checkboxComponent, ...props }: FormCheckboxProps<T>) => JSX.Element;
export default FormCheckbox;
//# sourceMappingURL=Checkbox.d.ts.map