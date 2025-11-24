import type { FC, PropsWithChildren } from 'react';

import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

import theme from '@shared/config/theme';

interface CardProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card: FC<CardProps> = ({ children, style }) => {
  return <View style={[styles.card, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary[90],
    padding: theme.spacing.x4,
    borderRadius: 8,
    elevation: 12,
    shadowColor: theme.palette.shadow.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    gap: theme.spacing.x4,
  },
});
