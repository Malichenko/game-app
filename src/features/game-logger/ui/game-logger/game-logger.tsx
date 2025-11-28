import { FlatList, StyleSheet } from 'react-native';

import theme from '@shared/config/theme';

import { LoggerItem } from './components/logger-item';

const getKey = (item: number, index: number) => `${item}::${index}`;

export const GameLogger = ({ guessHistory }: { guessHistory: number[] }) => {
  const reversedGuessHistory = [...guessHistory].reverse();

  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={reversedGuessHistory}
      renderItem={({ item, index }) => {
        return (
          <LoggerItem
            roundNumber={reversedGuessHistory.length - index}
            guess={item}
          />
        );
      }}
      keyExtractor={getKey}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    gap: theme.spacing.x4,
  },
});
