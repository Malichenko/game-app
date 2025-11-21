import type { FC, PropsWithChildren } from 'react';

import { useGame } from '@entities/game';
import { GameScreen } from '@screens/game';
import { GameOverScreen } from '@screens/game-over';
import { GameStartScreen } from '@screens/game-start';

export const Router: FC<PropsWithChildren> = () => {
  const { enteredNumber, gameIsOver } = useGame();

  switch (true) {
    case gameIsOver:
      return <GameOverScreen />;
    case Boolean(enteredNumber):
      return <GameScreen />;
    default:
      return <GameStartScreen />;
  }
};
