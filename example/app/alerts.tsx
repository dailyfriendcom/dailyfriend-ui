import { Alert, Button, TextInput } from 'dailyfriend-ui';
import { View } from 'react-native';

const ExpandableSectionPage: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
      <Alert.Provider>
        <Button
          onPress={() => {
            Alert.chooseOptions(
              'Title 3',
              [
                {
                  label: 'Opção 1',
                  value: '1',
                },
                {
                  label: 'Opção 2',
                  value: '2',
                },
              ],
              (option) => console.log(option)
            );

            Alert.show('Title', 'Message', [
              {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => null,
              },
              {
                text: 'Entendi',
                onPress: () => null,
              },
              {
                text: 'Outro',
                onPress: () => null,
              },
            ]);
            Alert.show('Title 2', 'Message');
            Alert.withContent('Title 3', <TextInput />);
          }}
        >
          Mostrar alert
        </Button>
      </Alert.Provider>
    </View>
  );
};

export default ExpandableSectionPage;
