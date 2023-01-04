import { View } from 'react-native';
import { SectionsWheelPicker } from 'dailyfriend-ui';

const ColorPalettePage: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <SectionsWheelPicker
        sections={[
          {
            label: 'horas',
            items: [
              {
                label: 'Item 1',
                value: 'item1',
              },
              {
                label: 'Item 2',
                value: 'item2',
              },
              {
                label: 'Item 3',
                value: 'item3',
              },
            ],
          },
          {
            label: 'minutos',
            items: [
              {
                label: 'Item 1',
                value: 'item1',
              },
              {
                label: 'Item 2',
                value: 'item2',
              },
              {
                label: 'Item 3',
                value: 'item3',
              },
            ],
          },
        ]}
      />
    </View>
  );
};

export default ColorPalettePage;
