import { create } from 'zustand';

type GameState = {
  enteredNumber: number;
  gameIsOver: boolean;
  pickNumber: (num: number) => void;
  setGameIsOver: (isOver: boolean) => void;
};

// Zustand store for game entity (FSD: entities/game/model)
export const useGame = create<GameState>((set) => ({
  enteredNumber: 0,
  gameIsOver: false,
  pickNumber: (num: number) => set({ enteredNumber: num, gameIsOver: false }),
  setGameIsOver: (isOver: boolean) => set({ gameIsOver: isOver }),
}));
