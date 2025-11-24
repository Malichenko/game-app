import { StyleSheet, View } from 'react-native';

import { useGame } from '@entities/game';
import theme from '@shared/config/theme';
import { Title } from '@shared/ui/title';
import { NumberInputForm } from '@widgets/number-input';

const GameStartScreen = (): React.ReactElement => {
  const { pickNumber } = useGame();

  const handleConfirm = (number: number) => {
    pickNumber(number);
  };

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>

      <NumberInputForm onConfirm={handleConfirm} min={1} max={99} />
    </View>
  );
};

export default GameStartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: theme.spacing.x4,
    paddingVertical: theme.spacing.x25,
    gap: theme.spacing.x20,
  },
});
