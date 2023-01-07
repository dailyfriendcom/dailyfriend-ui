/// <reference types="react" />
import { SnackbarProps } from 'react-native-paper';
import SnackbarProvider from './SnackbarProvider';
type AlertProps = {
    action?: SnackbarProps['action'];
    duration?: SnackbarProps['duration'];
};
declare function showSnackbar(text: string, { action, duration }?: AlertProps): void;
declare const _default: (import("react").ComponentType<Pick<Pick<import("react-native-paper").SurfaceProps, keyof import("react-native").ViewProps | "key" | "theme" | "elevation"> & import("react").RefAttributes<import("react-native").View> & {
    visible: boolean;
    action?: (Omit<Pick<Pick<import("react-native-paper").SurfaceProps, keyof import("react-native").ViewProps | "key" | "theme" | "elevation"> & import("react").RefAttributes<import("react-native").View> & {
        mode?: "text" | "outlined" | "elevated" | "contained" | "contained-tonal" | undefined;
        dark?: boolean | undefined;
        compact?: boolean | undefined;
        color?: string | undefined;
        buttonColor?: string | undefined;
        textColor?: string | undefined;
        loading?: boolean | undefined;
        icon?: import("react-native-paper/lib/typescript/components/Icon").IconSource | undefined;
        disabled?: boolean | undefined;
        children: import("react").ReactNode;
        uppercase?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onPressIn?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onPressOut?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        delayLongPress?: number | undefined;
        contentStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: import("react-native-paper/lib/typescript/types").InternalTheme;
        testID?: string | undefined;
    }, keyof import("react-native").ViewProps | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "delayLongPress" | "disabled" | keyof import("react").RefAttributes<import("react-native").View> | "color" | "labelStyle" | "mode" | "elevation" | "uppercase" | "textColor" | "contentStyle" | "dark" | "icon" | "loading" | "compact" | "buttonColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }, "children"> & {
        label: string;
    }) | undefined;
    icon?: import("react-native-paper/lib/typescript/components/Icon").IconSource | undefined;
    onIconPress?: (() => void) | undefined;
    iconAccessibilityLabel?: string | undefined;
    duration?: number | undefined;
    onDismiss: () => void;
    children: import("react").ReactNode;
    elevation?: 0 | 1 | 2 | import("react-native").Animated.Value | 3 | 4 | 5 | undefined;
    wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    ref?: import("react").RefObject<import("react-native").View> | undefined;
    theme: import("react-native-paper/lib/typescript/types").InternalTheme;
}, keyof import("react-native").ViewProps | keyof import("react").RefAttributes<import("react-native").View> | "elevation" | "visible" | "onDismiss" | "icon" | "onIconPress" | "action" | "duration" | "iconAccessibilityLabel" | "wrapperStyle"> & {
    theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
}> & import("@callstack/react-theme-provider/typings/hoist-non-react-statics").NonReactStatics<import("react").ComponentType<Pick<import("react-native-paper").SurfaceProps, keyof import("react-native").ViewProps | "key" | "theme" | "elevation"> & import("react").RefAttributes<import("react-native").View> & {
    visible: boolean;
    action?: (Omit<Pick<Pick<import("react-native-paper").SurfaceProps, keyof import("react-native").ViewProps | "key" | "theme" | "elevation"> & import("react").RefAttributes<import("react-native").View> & {
        mode?: "text" | "outlined" | "elevated" | "contained" | "contained-tonal" | undefined;
        dark?: boolean | undefined;
        compact?: boolean | undefined;
        color?: string | undefined;
        buttonColor?: string | undefined;
        textColor?: string | undefined;
        loading?: boolean | undefined;
        icon?: import("react-native-paper/lib/typescript/components/Icon").IconSource | undefined;
        disabled?: boolean | undefined;
        children: import("react").ReactNode;
        uppercase?: boolean | undefined;
        accessibilityLabel?: string | undefined;
        accessibilityHint?: string | undefined;
        onPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onPressIn?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onPressOut?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        onLongPress?: ((e: import("react-native").GestureResponderEvent) => void) | undefined;
        delayLongPress?: number | undefined;
        contentStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
        labelStyle?: import("react-native").StyleProp<import("react-native").TextStyle>;
        theme: import("react-native-paper/lib/typescript/types").InternalTheme;
        testID?: string | undefined;
    }, keyof import("react-native").ViewProps | "onPress" | "onPressIn" | "onPressOut" | "onLongPress" | "delayLongPress" | "disabled" | keyof import("react").RefAttributes<import("react-native").View> | "color" | "labelStyle" | "mode" | "elevation" | "uppercase" | "textColor" | "contentStyle" | "dark" | "icon" | "loading" | "compact" | "buttonColor"> & {
        theme?: import("@callstack/react-theme-provider").$DeepPartial<unknown> | undefined;
    }, "children"> & {
        label: string;
    }) | undefined;
    icon?: import("react-native-paper/lib/typescript/components/Icon").IconSource | undefined;
    onIconPress?: (() => void) | undefined;
    iconAccessibilityLabel?: string | undefined;
    duration?: number | undefined;
    onDismiss: () => void;
    children: import("react").ReactNode;
    elevation?: 0 | 1 | 2 | import("react-native").Animated.Value | 3 | 4 | 5 | undefined;
    wrapperStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
    ref?: import("react").RefObject<import("react-native").View> | undefined;
    theme: import("react-native-paper/lib/typescript/types").InternalTheme;
}> & {
    ({ visible, action, icon, onIconPress, iconAccessibilityLabel, duration, onDismiss, children, elevation, wrapperStyle, style, theme, ...rest }: SnackbarProps): JSX.Element | null;
    DURATION_SHORT: number;
    DURATION_MEDIUM: number;
    DURATION_LONG: number;
}, {}>) & {
    show: typeof showSnackbar;
    Provider: typeof SnackbarProvider;
};
export default _default;
//# sourceMappingURL=index.d.ts.map