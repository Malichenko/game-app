import { Image, StyleSheet, Text, View } from 'react-native';

import { useGame } from '@entities/game';
import theme from '@shared/config/theme';
import { Button } from '@shared/ui/button';
import { ScreenLayout } from '@shared/ui/screen-layout';
import { Title } from '@shared/ui/title';

export const GameOverScreen = () => {
  const { roundsToGuess, enteredNumber, resetGame } = useGame();

  return (
    <ScreenLayout style={styles.container}>
      <Title>Game Over!</Title>

      <View style={styles.imageContainer}>
        <Image
          source={require('@shared/assets/images/success.png')}
          style={styles.image}
        />
      </View>

      <Text style={styles.summary}>
        Your phone needed <Text style={styles.highlight}>{roundsToGuess}</Text>{' '}
        rounds to guess your number{' '}
        <Text style={styles.highlight}>{` ${enteredNumber}`}</Text>.
      </Text>

      <Button onPress={resetGame}>
        <Text style={styles.buttonText}>Start New Game</Text>
      </Button>
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: theme.spacing.x76,
    height: theme.spacing.x76,
    borderRadius: theme.spacing.x38,
    borderWidth: theme.spacing.x1,
    borderColor: theme.palette.primary[90],
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summary: {
    fontSize: theme.fontSize['2xl'],
    fontFamily: 'open-sans',
    color: theme.palette.neutral[100],
    textAlign: 'center',
    marginTop: theme.spacing.x9,
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: theme.palette.primary[60],
  },
  buttonText: {
    fontSize: theme.fontSize.base,
    fontFamily: 'open-sans-bold',
    color: theme.palette.neutral[10],
  },
});
