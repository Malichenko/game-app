import { useState } from 'react';

import { Alert, Platform, StyleSheet, TextInput, View } from 'react-native';

import theme from '@shared/config/theme';
import { Button } from '@shared/ui/button';
import { Card } from '@shared/ui/card';
import { InstructionText } from '@shared/ui/instruction-text';

type NumberInputFormProps = {
  onConfirm: (number: number) => void;
  min?: number;
  max?: number;
  maxLength?: number;
  placeholder?: string;
};

export const NumberInputForm = ({
  onConfirm,
  min = 1,
  max = 99,
  maxLength = 2,
  placeholder,
}: NumberInputFormProps) => {
  const [enteredNumber, setEnteredNumber] = useState('');

  const resetInputHandler = () => setEnteredNumber('');

  const numberInputHandler = (enteredText: string) => {
    setEnteredNumber(enteredText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber < min || chosenNumber > max) {
      Alert.alert(
        'Invalid number!',
        `Number has to be a number between ${min} and ${max}.`,
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

    onConfirm(chosenNumber);
    resetInputHandler();
  };

  return (
    <Card>
      <InstructionText>
        Enter a number between {min} and {max}:
      </InstructionText>

      <TextInput
        style={styles.inputNumber}
        maxLength={maxLength}
        keyboardType="number-pad"
        autoCorrect={false}
        value={enteredNumber}
        onChangeText={numberInputHandler}
        placeholder={placeholder}
        placeholderTextColor={theme.palette.accent[30]}
      />

      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button onPress={resetInputHandler}>Reset</Button>
        </View>

        <View style={styles.buttonContainer}>
          <Button onPress={confirmInputHandler}>Confirm</Button>
        </View>
      </View>
    </Card>
  );
};

export const styles = StyleSheet.create({
  tipText: {},
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
