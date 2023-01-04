import { Stack } from 'expo-router';
import { Provider } from 'dailyfriend-ui';
import { useEffect } from 'react';
import * as Font from 'expo-font';

export default function Layout() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'material-community': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
      });
    }

    loadFonts();
  }, []);

  return (
    <Provider>
      <Stack />
    </Provider>
  );
}
