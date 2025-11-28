import { GAME_MAX_NUMBER, GAME_MIN_NUMBER, useGame } from '@entities/game';
import { ScreenLayout } from '@shared/ui/screen-layout';
import { Title } from '@shared/ui/title';
import { NumberInputForm } from '@widgets/number-input';

const GameStartScreen = (): React.ReactElement => {
  const { pickNumber } = useGame();

  const handleConfirm = (number: number) => {
    pickNumber(number);
  };

  return (
    <ScreenLayout>
      <Title>Guess My Number</Title>

      <NumberInputForm
        onConfirm={handleConfirm}
        min={GAME_MIN_NUMBER}
        max={GAME_MAX_NUMBER}
      />
    </ScreenLayout>
  );
};

export default GameStartScreen;
