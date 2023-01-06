import { ActionSheet, Button } from 'dailyfriend-ui';
import { useState } from 'react';
import { View } from 'react-native';

const ExpandableSectionPage: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <ActionSheet.Provider>
        <Button onPress={() => setVisible(true)}>Abrir Sheet</Button>
        <Button
          onPress={() => {
            ActionSheet.show({
              options: [
                {
                  title: 'Item 1',
                },
                {
                  title: 'Item 2',
                },
              ],
            });
            ActionSheet.show({
              options: [
                {
                  title: 'Item 3',
                },
                {
                  title: 'Item 4',
                },
              ],
            });
          }}
        >
          Abrir Sheet 2
        </Button>
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
      </ActionSheet.Provider>
    </View>
  );
};

export default ExpandableSectionPage;
