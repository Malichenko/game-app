import { View } from 'react-native';

import { useGame } from '@entities/game';
import { Title } from '@shared/ui/title';
import { NumberInputForm } from '@widgets/number-input';

import { styles } from './GameStart.styles';

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
