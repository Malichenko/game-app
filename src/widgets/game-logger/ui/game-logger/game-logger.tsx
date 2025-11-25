import { FlatList, StyleSheet } from 'react-native';

import theme from '@shared/config/theme';

import { LoggerItem } from './components/logger-item';

const getKey = (item: number, index: number) => `${item}::${index}`;

export const GameLogger = ({ guessHistory }: { guessHistory: number[] }) => {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={guessHistory}
      renderItem={({ item, index }) => (
        <LoggerItem roundNumber={index + 1} guess={item} />
      )}
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
