/// <reference types="react" />
import FormRadioButton from './RadioButton';
export declare const Form: {
    TextInput: import("react").FC<import("./TextInput").FormTextInput>;
    Picker: import("react").FC<import("./Picker").FormPicker>;
    Checkbox: <T extends import("react-native-paper").CheckboxProps | import("react-native-paper").CheckboxAndroidProps | import("react-native-paper").CheckboxIOSProps | import("react-native-paper").CheckboxItemProps>({ inputName, control, controllerOptions, error, checkboxComponent, ...props }: import("./Checkbox").FormCheckboxProps<T>) => JSX.Element;
    RadioButton: typeof FormRadioButton;
    SegmentedButtons: import("react").FC<import("./SegmentedButtons").FormSegmentedButtonsProps>;
    Switch: import("react").FC<import("./Switch").FormSwitchProps>;
};
//# sourceMappingURL=index.d.ts.map