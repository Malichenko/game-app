import { create } from 'zustand';

type GameState = {
  enteredNumber: number;
  gameIsOver: boolean;
  roundsToGuess: number;
  pickNumber: (num: number) => void;
  setGameIsOver: (isOver: boolean) => void;
  setRoundsToGuess: (rounds: number) => void;
  resetGame: () => void;
};

// Zustand store for game entity (FSD: entities/game/model)
export const useGame = create<GameState>((set) => ({
  enteredNumber: 0,
  gameIsOver: false,
  roundsToGuess: 0,
  pickNumber: (num: number) => set({ enteredNumber: num, gameIsOver: false }),
  setGameIsOver: (isOver: boolean) => set({ gameIsOver: isOver }),
  setRoundsToGuess: (rounds: number) => set({ roundsToGuess: rounds }),
  resetGame: () =>
    set({ enteredNumber: 0, gameIsOver: false, roundsToGuess: 0 }),
}));
