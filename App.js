import { useFonts } from 'expo-font';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar } from 'react-native';
import Main from './src/Main/index';

export default function App() {
  /* Importando fontes */
  const [isFontsLoaded] = useFonts({
    'GeneralSans-400': require('./src/assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('./src/assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('./src/assets/fonts/GeneralSans-Bold.otf'),
  });

  if (!isFontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que a cor de fundo preencha toda a tela
    backgroundColor: '#4F5757',
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
