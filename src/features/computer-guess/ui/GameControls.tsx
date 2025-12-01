import { FC } from 'react';

import { type GuessDirection } from '@entities/game';
import { useScreenOrientation } from '@shared/lib/hooks/useScreenOrientation';

import { GameControlsLandscape } from './GameControls.landscape';
import { GameControlsPortrait } from './GameControls.portrait';

interface Props {
  guess: number;
  onGuess: (direction: GuessDirection) => void;
}

export const GameControls: FC<Props> = ({ guess, onGuess }) => {
  const { portrait, landscape } = useScreenOrientation();

  return (
    <>
      {portrait && <GameControlsPortrait guess={guess} onGuess={onGuess} />}
      {landscape && <GameControlsLandscape guess={guess} onGuess={onGuess} />}
    </>
  );
};
