import { GuessState } from '../model/types';
import { guessGenerator } from './guessGenerator';

export const createInitialGuess = (
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
