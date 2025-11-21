import { useEffect } from 'react';

import { Alert, StyleSheet, Text, View } from 'react-native';

import { type GuessDirection, useGame } from '@entities/game';
import { GuessControls, useComputerGuess } from '@features/computer-guess';
import theme from '@shared/config/theme';
import { NumberCard } from '@shared/ui/number-card';
import { Title } from '@shared/ui/title';

export const GameScreen = () => {
  const { enteredNumber, setGameIsOver } = useGame();
  const { currentGuess, processNextGuess, isWin } =
    useComputerGuess(enteredNumber);

  useEffect(() => {
    if (isWin) {
      setGameIsOver(true);
    }
  }, [isWin]);

  const handleGuess = (direction: GuessDirection) => {
    const result = processNextGuess(direction);

    if (!result.success && result.error === 'illegal_move') {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Title>Opponent's Guess</Title>

      <NumberCard>{currentGuess}</NumberCard>

      <GuessControls onGuess={handleGuess} />

      <View>
        <Text>LOG ROUNDS</Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: theme.spacing.x3,
    gap: theme.spacing.x4,
  },
});
