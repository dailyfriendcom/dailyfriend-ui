import { ColorPalette } from 'dailyfriend-ui';
import { useState } from 'react';
import { View } from 'react-native';

const colors = [
  '#20303C',
  '#43515C',
  '#66737C',
  '#858F96',
  '#A3ABB0',
  '#C2C7CB',
  '#E0E3E5',
  '#F2F4F5',
  '#3182C8',
  '#4196E0',
  '#459FED',
  '#57a8ef',
  '#8fc5f4',
  '#b5d9f8',
  '#daecfb',
  '#ecf5fd',
  '#00AAAF',
  '#32BABC',
  '#3CC7C5',
  '#64D4D2',
  '#8BDFDD',
  '#B1E9E9',
  '#D8F4F4',
  '#EBF9F9',
  '#00A65F',
  '#32B76C',
  '#65C888',
  '#84D3A0',
  '#A3DEB8',
  '#C1E9CF',
  '#E8F7EF',
  '#F3FBF7',
  '#E2902B',
  '#FAA030',
  '#FAAD4D',
  '#FBBD71',
  '#FCCE94',
  '#FDDEB8',
  '#FEEFDB',
  '#FEF7ED',
  '#D9644A',
  '#E66A4E',
  '#F27052',
  '#F37E63',
  '#F7A997',
  '#FAC6BA',
  '#FCE2DC',
  '#FEF0ED',
  '#CF262F',
  '#EE2C38',
  '#F2564D',
  '#F57871',
  '#F79A94',
  '#FABBB8',
  '#FCDDDB',
  '#FEEEED',
  '#8B1079',
  '#A0138E',
  '#B13DAC',
  '#C164BD',
  '#D08BCD',
  '#E0B1DE',
  '#EFD8EE',
  '#F7EBF7',
];
const ColorPalettePage: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | undefined>();

  return (
    <View style={{ flex: 1 }}>
      <ColorPalette
        colors={colors}
        value={selectedColor}
        onValueChange={setSelectedColor}
      />
    </View>
  );
};

export default ColorPalettePage;
