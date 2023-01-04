import { View } from 'react-native';
import { Button, Hint } from 'dailyfriend-ui';

const ColorPalettePage: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Hint visible message="Hello World">
        <View>
          <Button>Hello World</Button>
        </View>
      </Hint>
      <Hint visible message="Hello World">
        <View style={{ top: 150, left: 80, position: 'absolute' }}>
          <Button>Hello World</Button>
        </View>
      </Hint>
    </View>
  );
};

export default ColorPalettePage;
