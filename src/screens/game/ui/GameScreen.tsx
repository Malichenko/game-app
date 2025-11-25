import { useEffect } from 'react';

import { Alert } from 'react-native';

import { type GuessDirection, useGame } from '@entities/game';
import { GuessControls, useComputerGuess } from '@features/computer-guess';
import { NumberCard } from '@shared/ui/number-card';
import { ScreenLayout } from '@shared/ui/screen-layout/ScreenLayout';
import { Title } from '@shared/ui/title';
import { GameLogger } from '@widgets/game-logger';

export const GameScreen = () => {
  const { enteredNumber, setGameIsOver, setRoundsToGuess } = useGame();
  const { guess, stepCounter, guessHistory, processNextGuess, isWin } =
    useComputerGuess(enteredNumber);

  // TODO: think how to handle this login in more elegant way
  useEffect(() => {
    if (isWin) {
      setGameIsOver(true);
    }
  }, [isWin]);

  useEffect(() => {
    setRoundsToGuess(stepCounter);
  }, [stepCounter]);
  //* end of TODO

  const handleGuess = (direction: GuessDirection) => {
    const result = processNextGuess(direction);

    if (!result.success && result.error === 'illegal_move') {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
    }
  };

  return (
    <ScreenLayout>
      <Title>Opponent's Guess</Title>

      <NumberCard>{guess}</NumberCard>

      <GuessControls onGuess={handleGuess} />

      <GameLogger guessHistory={guessHistory} />
    </ScreenLayout>
  );
};
