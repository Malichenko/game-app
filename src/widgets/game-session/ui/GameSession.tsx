import { useCallback, useEffect } from 'react';

import { Alert } from 'react-native';

import { type GuessDirection, useGame } from '@entities/game';
import { useComputerGuess } from '@features/computer-guess';
import { GameControls } from '@features/computer-guess';
import { GameLogger } from '@features/game-logger';

export const GameSession = () => {
  const { enteredNumber, setGameIsOver, setRoundsToGuess } = useGame();
  const { guess, stepCounter, guessHistory, processNextGuess, isWin } =
    useComputerGuess(enteredNumber);

  const handleGuess = useCallback(
    (direction: GuessDirection) => {
      const result = processNextGuess(direction);

      if (!result.success && result.error === 'illegal_move') {
        Alert.alert("Don't lie!", 'You know that this is wrong...', [
          { text: 'Sorry!', style: 'cancel' },
        ]);
      }
    },
    [processNextGuess],
  );

  useEffect(() => {
    if (isWin) {
      setGameIsOver(true);
    }
  }, [isWin, setGameIsOver]);

  useEffect(() => {
    setRoundsToGuess(stepCounter);
  }, [stepCounter, setRoundsToGuess]);

  return (
    <>
      <GameControls guess={guess} onGuess={handleGuess} />
      <GameLogger guessHistory={guessHistory} />
    </>
  );
};
