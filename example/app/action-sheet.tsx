import { ActionSheet, Button } from 'dailyfriend-ui';
import { useState } from 'react';
import { View } from 'react-native';

const ExpandableSectionPage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Button onPress={() => setVisible(true)}>Abrir Sheet</Button>
      <ActionSheet
        visible={visible}
        onDismiss={() => setVisible(false)}
        title="This is my title"
        description="This is my description"
      >
        <ActionSheet.Item title="Item 1" onPress={() => null} />
        <ActionSheet.Item
          title="Item 2"
          description="Hello World"
          onPress={() => console.log('hello')}
        />
        <ActionSheet.Item title="Item 2" icon="home" onPress={() => null} />
        <ActionSheet.Item
          title="Item 2"
          iconRight="home"
          onPress={() => null}
        />
      </ActionSheet>
    </View>
  );
};

export default ExpandableSectionPage;
