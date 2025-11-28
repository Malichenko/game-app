import { useCallback, useMemo, useRef, useState } from 'react';

import {
  GAME_MAX_NUMBER,
  GAME_MIN_NUMBER,
  type GuessDirection,
} from '@entities/game';

import { createInitialGuess } from '../lib/createInitialGuess';
import { guessGenerator } from '../lib/guessGenerator';
import { isMoveIllegal } from '../lib/isMoveIllegal';
import { GuessResult, GuessState } from './types';

const boundedGuessGenerator = guessGenerator.bind(
  null,
  GAME_MIN_NUMBER,
  GAME_MAX_NUMBER,
);

export const useComputerGuess = (enteredNumber: number) => {
  const generatorRef = useRef(boundedGuessGenerator(enteredNumber));

  const [guessState, setGuessState] = useState<GuessState>(() =>
    createInitialGuess(generatorRef.current),
  );

  const processNextGuess = useCallback(
    (direction: GuessDirection): GuessResult => {
      if (!generatorRef.current) {
        return { success: false, error: 'generator_exhausted' };
      }

      if (isMoveIllegal(direction, guessState.guess, enteredNumber)) {
        return { success: false, error: 'illegal_move' };
      }

      const nextStep = generatorRef.current.next(direction);

      if (nextStep.done || !nextStep.value) {
        return { success: false, error: 'generator_exhausted' };
      }

      setGuessState((prev) => ({
        guess: nextStep.value.guess,
        stepCounter: nextStep.value.stepCounter,
        guessHistory: [...prev.guessHistory, nextStep.value.guess],
      }));

      return { success: true };
    },
    [enteredNumber, guessState],
  );

  const isWin = useMemo(
    () => enteredNumber === guessState.guess,
    [enteredNumber, guessState.guess],
  );

  return {
    ...guessState,
    processNextGuess,
    isWin,
  };
};
