import { ActivityIndicator, AnimatedImage } from 'dailyfriend-ui';
import { View } from 'react-native';

const AnimatedImagePage: React.FC = () => {
  return (
    <View>
      <AnimatedImage
        source={{
          uri: 'https://static3.depositphotos.com/1000135/101/i/600/depositphotos_1010062-stock-photo-empty.jpg',
        }}
        loader={<ActivityIndicator />}
        style={{ resizeMode: 'cover', height: 400 }}
      />
    </View>
  );
};

export default AnimatedImagePage;
