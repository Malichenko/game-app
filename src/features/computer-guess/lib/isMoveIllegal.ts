import type { GuessDirection } from '@entities/game';

export const isMoveIllegal = (
  direction: GuessDirection,
  currentGuess: number,
  targetNumber: number,
): boolean => {
  return (
    (direction === 'lower' && currentGuess < targetNumber) ||
    (direction === 'higher' && currentGuess > targetNumber)
  );
};
