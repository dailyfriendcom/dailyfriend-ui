import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ActionSheet } from 'dailyfriend-ui';
import { View } from 'react-native';

const ExpandableSectionPage: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <ActionSheet
        visible={true}
        title={'Title'}
        message={'Message goes here'}
        cancelButtonIndex={3}
        destructiveButtonIndex={0}
        useSafeArea
        options={[
          {
            label: 'Hello',
            onPress: () => null,
            // eslint-disable-next-line react/no-unstable-nested-components
            iconLeft: (color, style) => (
              <MaterialCommunityIcons
                name="home"
                color={color}
                style={style}
                size={24}
              />
            ),
          },
          { label: 'World', onPress: () => null, iconRight: 'home' },
          { label: 'Cancel', onPress: () => console.log('cancel') },
        ]}
      />
    </View>
  );
};

export default ExpandableSectionPage;
