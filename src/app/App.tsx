import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { GameStartScreen } from "@screens/game-start";
import { LinearGradient } from "expo-linear-gradient";
import { palette } from "@shared/config/theme";

export const App = (): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <LinearGradient
        colors={[palette.primary[80], palette.accent[50]]}
        style={[styles.fullScreen]}
      >
        <ImageBackground
          source={require("@shared/assets/background.png")}
          style={[styles.fullScreen]}
          resizeMode="cover"
          imageStyle={styles.backgroundImage}
        >
          <SafeAreaView style={[styles.fullScreen]}>
            <GameStartScreen />
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
