import { View, TextInput, StyleSheet, Platform } from "react-native";
import { Button } from "@shared/ui";
import { palette, spacing, fontSize } from "@shared/config/theme";

const GameStartScreen = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputNumber}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={() => {}}>Reset</Button>
          </View>

          <View style={styles.buttonContainer}>
            <Button onPress={() => {}}>Confirm</Button>
          </View>
        </View>
      </View>
    </View>
  );
};

export default GameStartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.x4,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: palette.primary[90],
    padding: spacing.x4,
    borderRadius: 8,
    elevation: 12,
    shadowColor: palette.shadow.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  inputNumber: {
    height: 50,
    width: 50,
    fontSize: fontSize.x8,
    borderBottomWidth: 2,
    borderBottomColor: palette.accent[50],
    color: palette.accent[50],
    marginVertical: spacing.x2,
    fontWeight: "bold",
    textAlign: "center",
    ...Platform.select({
      android: {
        includeFontPadding: false,
        padding: 0,
      },
    }),
  },
  buttonsContainer: {
    gap: spacing.x1,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
