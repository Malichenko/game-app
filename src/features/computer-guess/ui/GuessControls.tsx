import { Text, View } from 'react-native';

import type { GuessDirection } from '@entities/game';
import { Button } from '@shared/ui/button';

import { styles } from './GuessControls.styles';

type GuessControlsProps = {
  onGuess: (direction: GuessDirection) => void;
};

export const GuessControls = ({ onGuess }: GuessControlsProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Higher or lower?</Text>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button onPress={onGuess.bind(this, 'higher')}>+</Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={onGuess.bind(this, 'lower')}>-</Button>
        </View>
      </View>
    </View>
  );
};
