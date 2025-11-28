import { FC } from 'react';

import { useGame } from '@entities/game';
import { useScreenOrientation } from '@shared/lib/hooks/useScreenOrientation';

import { GameOverLandscape } from './GameOverWidget.landscape';
import { GameOverPortrait } from './GameOverWidget.portrait';

export interface GameOverProps {
  roundsToGuess: number;
  enteredNumber: number;
  onRestart: () => void;
}

export const GameOverWidget: FC = () => {
  const { roundsToGuess, enteredNumber, resetGame } = useGame();
  const { landscape, portrait } = useScreenOrientation();

  const props: GameOverProps = {
    roundsToGuess,
    enteredNumber,
    onRestart: resetGame,
  };

  return (
    <>
      {landscape && <GameOverLandscape {...props} />}
      {portrait && <GameOverPortrait {...props} />}
    </>
  );
};
