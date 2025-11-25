import { useCallback, useMemo, useRef, useState } from 'react';

import type { GuessDirection } from '@entities/game';

import { guessGenerator } from '../lib/guessGenerator';
import { isMoveIllegal } from '../lib/isMoveIllegal';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

type ProcessGuessResult =
  | { success: true }
  | { success: false; error: 'illegal_move' | 'generator_exhausted' };

type GuessState = {
  guess: number;
  stepCounter: number;
  guessHistory: number[];
};

const createInitialGuess = (
  generator: ReturnType<typeof guessGenerator>,
): GuessState => {
  const initial = generator.next();
  const guess = initial.value?.guess ?? 0;
  return {
    guess,
    stepCounter: initial.value?.stepCounter ?? 0,
    guessHistory: [guess],
  };
};

const boundedGuessGenerator = guessGenerator.bind(null, MIN_NUMBER, MAX_NUMBER);

export const useComputerGuess = (enteredNumber: number) => {
  const generatorRef = useRef(boundedGuessGenerator(enteredNumber));

  const [guessState, setGuessState] = useState<GuessState>(() =>
    createInitialGuess(generatorRef.current),
  );

  const processNextGuess = useCallback(
    (direction: GuessDirection): ProcessGuessResult => {
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
