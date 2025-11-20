import type { GuessDirection } from '@entities/game';
import { generateRandomNumber } from '@shared/lib/utils/generateRandomNumber';

export function* guessGenerator(
  min: number,
  max: number,
  targetNumber: number,
): Generator<
  { guess: number; stepCounter: number },
  void,
  GuessDirection | undefined
> {
  let minBoundary = min;
  let maxBoundary = max;
  let stepCounter = 0;

  while (maxBoundary > minBoundary) {
    stepCounter++;
    const guess = generateRandomNumber(minBoundary, maxBoundary);
    const direction = yield {
      guess,
      stepCounter,
    };

    if (direction === 'lower') {
      maxBoundary = guess;
    } else if (direction === 'higher') {
      minBoundary = guess;
    }

    if (targetNumber === guess) break;
  }
}
