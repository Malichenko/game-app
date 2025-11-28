import { ScreenLayout } from '@shared/ui/screen-layout';
import { Title } from '@shared/ui/title';
import { GameSession } from '@widgets/game-session';

export const GameScreen = () => {
  return (
    <ScreenLayout>
      <Title>Opponent&apos;s Guess</Title>

      <GameSession />
    </ScreenLayout>
  );
};
