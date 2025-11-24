import type { FC, PropsWithChildren } from 'react';

import { StyleSheet, Text, View } from 'react-native';

import theme from '@shared/config/theme';

export const NumberCard: FC<PropsWithChildren> = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: theme.spacing.x1,
    borderColor: theme.palette.accent[50],
    padding: theme.spacing.x6,
    borderRadius: theme.spacing.x2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: theme.palette.accent[50],
    fontSize: theme.fontSize['4xl'],
    fontFamily: 'open-sans-bold',
  },
});
