import { StyleSheet, View } from 'react-native';

import { type GuessDirection } from '@entities/game';
import { Ionicons } from '@expo/vector-icons';
import theme from '@shared/config/theme';
import { Button } from '@shared/ui/button';
import { Card } from '@shared/ui/card';
import { InstructionText } from '@shared/ui/instruction-text';
import { NumberCard } from '@shared/ui/number-card';

export const GameControlsPortrait = ({
  guess,
  onGuess,
}: {
  guess: number;
  onGuess: (direction: GuessDirection) => void;
}) => {
  return (
    <>
      <NumberCard>{guess}</NumberCard>

      <Card>
        <InstructionText>Higher or lower?</InstructionText>

        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <Button onPress={onGuess.bind(this, 'higher')}>
              <Ionicons name="add" size={24} />
            </Button>
          </View>

          <View style={styles.buttonContainer}>
            <Button onPress={onGuess.bind(this, 'lower')}>
              <Ionicons name="remove" size={24} />
            </Button>
          </View>
        </View>
      </Card>
    </>
  );
};

export const styles = StyleSheet.create({
  label: {
    fontSize: theme.fontSize.lg,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.x1,
  },
  buttonContainer: {
    flex: 1,
  },
});
