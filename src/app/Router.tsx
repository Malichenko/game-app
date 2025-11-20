import type { FC, PropsWithChildren } from 'react';

import { useGame } from '@entities/game';
import { GameScreen } from '@screens/game';
import { GameStartScreen } from '@screens/game-start';

export const Router: FC<PropsWithChildren> = () => {
  const { enteredNumber } = useGame();

  switch (true) {
    case Boolean(enteredNumber):
      return <GameScreen />;
    default:
      return <GameStartScreen />;
  }
};
