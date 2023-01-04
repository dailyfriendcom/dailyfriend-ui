import { useState } from 'react';
import { ExpandableSection, Text } from 'dailyfriend-ui';
import { View } from 'react-native';

const ExpandableSectionPage: React.FC = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ExpandableSection
        expanded={expanded}
        onPress={() => setExpanded(!expanded)}
        sectionHeader={<Text>Expandir</Text>}
      >
        <Text>Hello World</Text>
      </ExpandableSection>
    </View>
  );
};

export default ExpandableSectionPage;
