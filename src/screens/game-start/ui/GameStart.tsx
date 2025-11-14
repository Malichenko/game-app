import { View, TextInput, StyleSheet, Platform } from "react-native";
import { Button } from "@shared/ui";

const GameStartScreen = (): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputNUmber}
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
    padding: 16,
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3b021f",
    padding: 16,
    borderRadius: 8,
    elevation: 12,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  inputNUmber: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomWidth: 2,
    borderBottomColor: "#ddb52f",
    color: "#ddb52f",
    marginVertical: 8,
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
    gap: 4,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    flex: 1,
  },
});
