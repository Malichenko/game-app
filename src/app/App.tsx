import { ImageBackground, StyleSheet } from 'react-native';

import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';

import theme from '@shared/config/theme';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Router } from './Router';

export const App = (): React.ReactElement => {
  const [fontsLoaded] = useFonts({
    'open-sans': require('@shared/assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('@shared/assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <LinearGradient
        colors={[theme.palette.primary[80], theme.palette.accent[50]]}
        style={[styles.fullScreen]}
      >
        <ImageBackground
          source={require('@shared/assets/background.png')}
          style={[styles.fullScreen]}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={[styles.fullScreen]}>
            <Router />
          </SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
