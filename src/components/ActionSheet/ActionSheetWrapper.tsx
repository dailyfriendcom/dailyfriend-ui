import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Dialog, PanningProvider } from 'react-native-ui-lib';
import ActionSheetItem, { ActionSheetItemProps } from './ActionSheetItem';

export interface ActionSheetProps {
  visible: boolean;
  onDismiss: () => void;
  closeOnDragDown?: boolean;
  closeOnPressMask?: boolean;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const ActionSheet: React.FC<ActionSheetProps> = ({
  visible,
  onDismiss,
  closeOnDragDown = true,
  closeOnPressMask = true,
  title,
  description,
  children,
}) => {
  const theme = useTheme();
  const safeAreaInsets = useSafeAreaInsets();

  const renderDraggableIcon = useCallback(() => {
    if (!closeOnDragDown) return null;

    return (
      <View
        style={[
          styles.draggableIcon,
          {
            backgroundColor: theme.colors.onSurfaceDisabled,
          },
        ]}
      />
    );
  }, [closeOnDragDown, theme.colors.onSurfaceDisabled]);

  const renderHeader = useCallback(() => {
    if (!title && !description) {
      return null;
    }

    return (
      <View style={{ marginBottom: 16 }}>
        {title && <Text variant="headlineSmall">{title}</Text>}

        {description && <Text variant="bodyMedium">{description}</Text>}
      </View>
    );
  }, [title, description]);

  return (
    <Dialog
      bottom
      centerH
      width="100%"
      panDirection={
        closeOnDragDown ? PanningProvider.Directions.DOWN : undefined
      }
      visible={visible}
      onDismiss={onDismiss}
      ignoreBackgroundPress={!closeOnPressMask}
    >
      <View
        style={[
          styles.container,
          {
            backgroundColor: theme.colors.background,
            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,
            paddingBottom: safeAreaInsets.bottom,
          },
        ]}
      >
        {renderDraggableIcon()}
        {renderHeader()}

        <View style={{ marginHorizontal: -16 }}>
          {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
              return React.cloneElement(child, {
                onPress: () => {
                  onDismiss();
                  child.props.onPress?.();
                },
              } as ActionSheetItemProps);
            }
            return child;
          })}
        </View>
      </View>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  draggableIcon: {
    width: 40,
    height: 5,
    marginBottom: 5,
    borderRadius: 3,
    alignSelf: 'center',
  },
});

// @ts-expect-error
ActionSheet.Item = ActionSheetItem;

export default ActionSheet as typeof ActionSheet & {
  Item: typeof ActionSheetItem;
};
