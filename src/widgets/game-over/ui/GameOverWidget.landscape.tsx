import { FC } from 'react';

import { Image, StyleSheet, Text, View } from 'react-native';

import theme from '@shared/config/theme';
import { Button } from '@shared/ui/button';
import { Title } from '@shared/ui/title';

import type { GameOverProps } from './GameOverWidget';

export const GameOverLandscape: FC<GameOverProps> = ({
  roundsToGuess,
  enteredNumber,
  onRestart,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('@shared/assets/images/success.png')}
          style={styles.image}
        />
      </View>

      <View style={styles.content}>
        <Title>Game Over!</Title>

        <Text style={[styles.summary, styles.summaryLandscape]}>
          Your phone needed&nbsp;
          <Text style={styles.highlight}>{roundsToGuess}</Text>
          &nbsp;rounds to guess your number&nbsp;
          <Text style={styles.highlight}>{enteredNumber}</Text>.
        </Text>

        <Button onPress={onRestart}>
          <Text style={styles.buttonText}>Start New Game</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: theme.spacing.x8,
    paddingHorizontal: theme.spacing.x10,
  },
  imageContainer: {
    width: theme.spacing.x64,
    height: theme.spacing.x64,
    borderRadius: theme.spacing.x32,
    borderWidth: theme.spacing.x1,
    borderColor: theme.palette.primary[90],
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    width: '60%',
    gap: theme.spacing.x4,
  },
  summary: {
    fontSize: theme.fontSize['2xl'],
    fontFamily: 'open-sans',
    color: theme.palette.neutral[100],
    textAlign: 'center',
    marginTop: theme.spacing.x9,
  },
  summaryLandscape: {
    marginTop: 0,
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
