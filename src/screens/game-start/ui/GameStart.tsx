import { useGame } from '@entities/game';
import theme from '@shared/config/theme';
import { ScreenLayout } from '@shared/ui/screen-layout';
import { Title } from '@shared/ui/title';
import { NumberInputForm } from '@widgets/number-input';

const GameStartScreen = (): React.ReactElement => {
  const { pickNumber } = useGame();

  const handleConfirm = (number: number) => {
    pickNumber(number);
  };

  return (
    <ScreenLayout
      style={{
        paddingHorizontal: theme.spacing.x4,
        paddingVertical: theme.spacing.x25,
        gap: theme.spacing.x20,
      }}
    >
      <Title>Guess My Number</Title>

      <NumberInputForm onConfirm={handleConfirm} min={1} max={99} />
    </ScreenLayout>
  );
};

export default GameStartScreen;
