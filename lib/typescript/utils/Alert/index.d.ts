/// <reference types="react" />
import type { AlertButton } from 'react-native';
import { AlertButtonOptions } from './AlertProvider';
declare function showAlert(title: string, message?: string, buttons?: AlertButton[]): void;
declare function showWithContent(title: string, customContent: React.ReactNode): void;
declare function showChooseOptions(title: string, options: AlertButtonOptions[], onDismiss: (value: string) => void): void;
declare function yesOrNoButtons(yesLabel: string, cancelableLabel: string, yesFunction: (value?: string) => void): AlertButton[];
declare const Alert: {
    show: typeof showAlert;
    withContent: typeof showWithContent;
    chooseOptions: typeof showChooseOptions;
    yesOrNoButtons: typeof yesOrNoButtons;
    Provider: import("react").FC<{}>;
};
export default Alert;
//# sourceMappingURL=index.d.ts.map