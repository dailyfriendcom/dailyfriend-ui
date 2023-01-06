import {
  Button,
  Colors,
  MD2Colors,
  Spacings,
  Text,
  useTheme,
  View,
} from 'dailyfriend-ui';

const ColorPalettePage: React.FC = () => {
  const theme = useTheme();

  Colors.loadColors({
    ...MD2Colors,
    ...theme.colors,
  } as any);

  Spacings.loadSpacings({
    page: 16,
  });

  Spacings.loadSpacings({
    common: 56,
  });

  return (
    <View style={{ flex: 1 }}>
      <Text>Hello World</Text>
      <Button>Hello</Button>

      <View marginT-50 row margin-common spread>
        <Text>HEllo</Text>
        <Text>World</Text>
      </View>
    </View>
  );
};

export default ColorPalettePage;
