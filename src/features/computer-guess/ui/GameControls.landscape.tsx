import { StyleSheet, View } from 'react-native';

import { GuessDirection } from '@entities/game';
import { Ionicons } from '@expo/vector-icons';
import theme from '@shared/config/theme';
import { Button } from '@shared/ui/button';
import { NumberCard } from '@shared/ui/number-card';

export const GameControlsLandscape = ({
  guess,
  onGuess,
}: {
  guess: number;
  onGuess: (direction: GuessDirection) => void;
}) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => onGuess('higher')} style={styles.button}>
        <Ionicons name="add" size={24} />
      </Button>
      <NumberCard style={styles.numberCard}>{guess}</NumberCard>
      <Button onPress={() => onGuess('lower')} style={styles.button}>
        <Ionicons name="remove" size={24} />
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '50%',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing.x2,
    backgroundColor: theme.palette.accent[10],
    padding: theme.spacing.x4,
    borderRadius: theme.spacing.x5,
    borderWidth: 2,
    borderColor: theme.palette.primary[80],
  },
  numberCard: {
    width: '30%',
    borderRadius: theme.spacing.x5,
    backgroundColor: theme.palette.primary[60],
    borderColor: theme.palette.primary[60],
  },
  button: {
    flex: 1,
    width: theme.spacing.x20,
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderRadius: theme.spacing.x5,
  },
});
