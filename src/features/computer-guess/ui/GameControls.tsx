import { FC } from 'react';

import { useWindowDimensions } from 'react-native';

import { type GuessDirection } from '@entities/game';

import { GameControlsLandscape } from './GameControls.landscape';
import { GameControlsPortrait } from './GameControls.portrait';

interface Props {
  guess: number;
  onGuess: (direction: GuessDirection) => void;
}

export const GameControls: FC<Props> = ({ guess, onGuess }) => {
  const { width, height } = useWindowDimensions();
  const isPortrait = width < height;

  return isPortrait ? (
    <GameControlsPortrait guess={guess} onGuess={onGuess} />
  ) : (
    <GameControlsLandscape guess={guess} onGuess={onGuess} />
  );
};
