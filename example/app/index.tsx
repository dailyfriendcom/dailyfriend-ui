import { useTheme } from 'dailyfriend-ui';
import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Home() {
  const theme = useTheme();

  const color = { color: theme.colors.onSurface };

  return (
    <View>
      <Stack.Screen options={{ title: 'Início' }} />

      <Link href="/forms" style={[styles.linkButton, color]}>
        Formulários
      </Link>
      <Link href="/animated-image" style={[styles.linkButton, color]}>
        Imagens animadas
      </Link>
      <Link href="/color-palette" style={[styles.linkButton, color]}>
        Paleta de cores
      </Link>
      <Link href="/sections-wheel-picker" style={[styles.linkButton, color]}>
        Sections Wheel Picker
      </Link>
      <Link href="/hint" style={[styles.linkButton, color]}>
        Hint
      </Link>
      <Link href="/expandable-section" style={[styles.linkButton, color]}>
        Expandable Section
      </Link>
      <Link href="/action-sheet" style={[styles.linkButton, color]}>
        ActionSheet
      </Link>
      <Link href="/alerts" style={[styles.linkButton, color]}>
        Alerts & Snackbars
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
