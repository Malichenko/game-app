import { StyleSheet, ImageBackground } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { GameStartScreen } from "@screens/game-start";
import { LinearGradient } from "expo-linear-gradient";

export const App = (): React.ReactElement => {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <LinearGradient
        colors={["#4e0329", "#ddb52f"]}
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
