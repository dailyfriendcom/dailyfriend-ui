import React, { useMemo } from 'react';
import { List, ListItemProps, ListIconProps } from 'react-native-paper';

export type ActionSheetItemProps = Partial<ListItemProps> & {
  icon?: ListIconProps['icon'];
  iconRight?: ListIconProps['icon'];
};

const ActionSheetItem: React.FC<ActionSheetItemProps> = (props) => {
  const left = useMemo((): ListItemProps['left'] => {
    if (props.icon) {
      return (leftProps) => (
        <List.Icon {...leftProps} icon={props.icon as ListIconProps['icon']} />
      );
    }
    return props.left;
  }, [props.left, props.icon]);

  const right = useMemo((): ListItemProps['right'] => {
    if (props.iconRight) {
      return (leftProps) => (
        <List.Icon
          {...leftProps}
          icon={props.iconRight as ListIconProps['icon']}
        />
      );
    }
    return props.right;
  }, [props.right, props.iconRight]);

  // @ts-expect-error
  return <List.Item {...props} left={left} right={right} />;
};

export default ActionSheetItem;
