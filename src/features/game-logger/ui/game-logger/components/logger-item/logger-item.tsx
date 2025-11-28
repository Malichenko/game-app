import type { FC } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import theme from '@shared/config/theme';

export const LoggerItem: FC<{ roundNumber: number; guess: number }> = ({
  roundNumber,
  guess,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>#{roundNumber}</Text>
      <Text style={styles.text}>Opponent's guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: theme.palette.primary[80],
    borderWidth: 2,
    padding: theme.spacing.x4,
    borderRadius: theme.spacing.x4,
    backgroundColor: theme.palette.accent[10],
    elevation: 4,
    shadowColor: theme.palette.shadow.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
  },
  text: {
    fontFamily: 'open-sans',
    color: theme.palette.primary[80],
  },
});
