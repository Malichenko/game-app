import { FC, PropsWithChildren } from 'react';

import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';

import theme from '@shared/config/theme';

interface TitleProps extends PropsWithChildren {
  style?: StyleProp<TextStyle>;
}

export const Title: FC<TitleProps> = ({ children, style }) => {
  return <Text style={[styles.title, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSize['2xl'],
    fontFamily: 'open-sans-bold',
    color: theme.palette.neutral[10],
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: theme.spacing.x2,
    borderColor: theme.palette.neutral[10],
    padding: theme.spacing.x3,
  },
});
