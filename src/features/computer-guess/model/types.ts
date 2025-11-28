import type { GuessDirection } from '@entities/game';

export interface GuessHistoryItem {
  id: string;
  step: number;
  guess: number;
  direction: GuessDirection | null; // null for first step
  createdAt: number;
}

export type ErrorCode = 'illegal_move' | 'generator_exhausted';

export interface GuessResultSuccess {
  success: true;
}

export interface GuessResultFail {
  success: false;
  error: ErrorCode;
}

export type GuessResult = GuessResultSuccess | GuessResultFail;

export interface UseComputerGuessParams {
  target: number;
}

export interface UseComputerGuessReturn {
  guess: number;
  stepCounter: number;
  guessHistory: GuessHistoryItem[];
  isWin: boolean;
  processNextGuess: (direction: GuessDirection) => GuessResult;
}

export interface GuessState {
  guess: number;
  stepCounter: number;
  guessHistory: number[];
}
