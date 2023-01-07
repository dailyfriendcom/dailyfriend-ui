import React from 'react';
import type { AlertButton } from 'react-native';
export interface AlertButtonOptions {
    label: string;
    value: string;
}
export interface Alert {
    type: 'alert' | 'chooseOptions';
    title: string;
    message?: string;
    buttons?: AlertButton[];
    customContent?: React.ReactNode;
    options?: AlertButtonOptions[];
    onDismiss: (option?: string) => void;
}
declare const AlertProvider: React.FC;
export default AlertProvider;
//# sourceMappingURL=AlertProvider.d.ts.map