import type { FC, PropsWithChildren } from 'react';

import { GameProvider } from '@entities/game';

export const AppProvider: FC<PropsWithChildren> = ({ children }) => {
  return <GameProvider>{children}</GameProvider>;
};
