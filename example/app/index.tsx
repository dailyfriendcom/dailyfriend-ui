import { StyleSheet, View } from 'react-native';
import { Link, Stack } from 'expo-router';

export default function Home() {
  return (
    <View>
      <Stack.Screen options={{ title: 'Início' }} />

      <Link href="/forms" style={styles.linkButton}>
        Formulários
      </Link>
      <Link href="/animated-image" style={styles.linkButton}>
        Imagens animadas
      </Link>
      <Link href="/color-palette" style={styles.linkButton}>
        Paleta de cores
      </Link>
      <Link href="/sections-wheel-picker" style={styles.linkButton}>
        Sections Wheel Picker
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  linkButton: {
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginBottom: 5,
    width: '100%',
    textAlign: 'center',
  },
});
