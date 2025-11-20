import { useCallback, useMemo, useRef, useState } from 'react';

import type { GuessDirection } from '@entities/game';

import { guessGenerator } from '../lib/guessGenerator';
import { isMoveIllegal } from '../lib/isMoveIllegal';

type ProcessGuessResult = {
  success: boolean;
  error?: 'illegal_move';
};

export const useComputerGuess = (enteredNumber: number) => {
  const generatorRef = useRef(guessGenerator(1, 100, enteredNumber));

  const [currentGuess, setCurrentGuess] = useState(() => {
    const initial = generatorRef.current.next();
    return initial.value?.guess ?? 0;
  });

  const processNextGuess = useCallback(
    (direction: GuessDirection): ProcessGuessResult => {
      if (isMoveIllegal(direction, currentGuess, enteredNumber)) {
        return { success: false, error: 'illegal_move' };
      }

      const nextStep = generatorRef.current.next(direction);

      if (nextStep.done) {
        return { success: false };
      }

      if (nextStep.value) {
        setCurrentGuess(nextStep.value.guess);
        return { success: true };
      }

      return { success: false };
    },
    [currentGuess, enteredNumber],
  );

  const isWin = useMemo(
    () => enteredNumber === currentGuess,
    [enteredNumber, currentGuess],
  );

  return {
    currentGuess,
    processNextGuess,
    isWin,
  };
};
