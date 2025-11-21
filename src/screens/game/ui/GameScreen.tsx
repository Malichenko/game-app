import { useEffect } from 'react';

import { Alert, Text, View } from 'react-native';

import { type GuessDirection, useGame } from '@entities/game';
import { GuessControls, useComputerGuess } from '@features/computer-guess';
import { NumberCard } from '@shared/ui/number-card';
import { Title } from '@shared/ui/title';

import { styles } from './GameScreen.styles';

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
