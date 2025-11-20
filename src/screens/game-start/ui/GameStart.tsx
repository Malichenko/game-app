import { useState } from 'react';

import { Alert, Platform, StyleSheet, TextInput, View } from 'react-native';

import { useGame } from '@entities/game';
import theme from '@shared/config/theme';
import { Button } from '@shared/ui/button';

const GameStartScreen = (): React.ReactElement => {
  const { pickNumber } = useGame();
  const [enteredNumber, setEnteredNumber] = useState('');

  const resetInputHandler = () => setEnteredNumber('');

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number!',
        'Number has to be a number between 1 and 99.',
        [
          {
            text: 'Okay',
            style: 'destructive',
            onPress: resetInputHandler,
          },
        ],
      );

      return;
    }

    pickNumber(chosenNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputNumber}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          value={enteredNumber}
          onChangeText={numberInputHandler}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={resetInputHandler}>Reset</Button>
          </View>

          <View style={styles.buttonContainer}>
            <Button onPress={confirmInputHandler}>Confirm</Button>
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
    padding: theme.spacing.x4,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary[90],
    padding: theme.spacing.x4,
    borderRadius: 8,
    elevation: 12,
    shadowColor: theme.palette.shadow.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  inputNumber: {
    height: 50,
    width: 50,
    fontSize: theme.fontSize['4xl'],
    borderBottomWidth: 2,
    borderBottomColor: theme.palette.accent[50],
    color: theme.palette.accent[50],
    marginVertical: theme.spacing.x2,
    fontWeight: 'bold',
    textAlign: 'center',
    ...Platform.select({
      android: {
        includeFontPadding: false,
        padding: 0,
      },
    }),
  },
  buttonsContainer: {
    gap: theme.spacing.x1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  },
});
