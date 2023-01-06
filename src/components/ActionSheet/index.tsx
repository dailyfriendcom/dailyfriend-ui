import React from 'react';
import { View } from 'react-native';
import { List, Text, useTheme } from 'react-native-paper';
import type { ButtonProps } from 'react-native-ui-lib';
import UIActionSheet from 'react-native-ui-lib/actionSheet';

type ActionSheetButtonProps = Pick<
  Partial<ButtonProps>,
  'label' | 'onPress'
> & {
  iconLeft?: ((color: string, style: any) => React.ReactNode) | string;
  iconRight?: ((color: string, style: any) => React.ReactNode) | string;
};

type UIActionSheet = typeof UIActionSheet.defaultProps;

type ActionSheetProps = UIActionSheet & {
  options?: ActionSheetButtonProps[];
};

const ActionSheet: React.FC<ActionSheetProps> = (props) => {
  const theme = useTheme();

  return (
    // @ts-expect-error
    <UIActionSheet
      options={props.options}
      dialogStyle={{
        backgroundColor: 'transparent',
      }}
      containerStyle={{
        backgroundColor: theme.colors.background,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
      renderTitle={() => (
        <View style={{ margin: 16 }}>
          <Text variant="headlineSmall">Title</Text>
          <Text variant="bodyLarge">Message goes here</Text>
        </View>
      )}
      renderAction={(_options, index, onOptionPress) => {
        const options = _options as ActionSheetButtonProps;
        return (
          <List.Item
            // eslint-disable-next-line react/no-unstable-nested-components
            left={({ color, style }) => {
              if (options.iconLeft) {
                if (typeof options.iconLeft === 'string') {
                  return (
                    <List.Icon
                      icon={options.iconLeft as any}
                      style={style}
                      color={color}
                    />
                  );
                } else {
                  return (
                    <List.Icon
                      icon={() =>
                        (
                          options.iconLeft as (
                            color: string,
                            style: any
                          ) => React.ReactNode
                        )?.(color, style)
                      }
                    />
                  );
                }
              }
              return null;
            }}
            // eslint-disable-next-line react/no-unstable-nested-components
            right={({ color, style }) => {
              if (options.iconRight) {
                if (typeof options.iconRight === 'string') {
                  return (
                    <List.Icon
                      icon={options.iconRight as any}
                      style={style}
                      color={color}
                    />
                  );
                } else {
                  return (
                    <List.Icon
                      icon={() =>
                        (
                          options.iconRight as (
                            color: string,
                            style: any
                          ) => React.ReactNode
                        )?.(color, style)
                      }
                    />
                  );
                }
              }
              return null;
            }}
            title={options.label}
            onPress={() => onOptionPress(index)}
          />
        );
      }}
      {...props}
    />
  );
};

export default ActionSheet;
