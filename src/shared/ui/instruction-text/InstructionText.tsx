import { FC, PropsWithChildren } from 'react';

import { StyleSheet, Text, TextStyle } from 'react-native';

import theme from '@shared/config/theme';

interface InstructionTextProps extends PropsWithChildren {
  style?: TextStyle;
}

export const InstructionText: FC<InstructionTextProps> = ({
  children,
  style,
}) => {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instructionText: {
    fontSize: theme.fontSize.xl,
    fontFamily: 'open-sans-bold',
    color: theme.palette.accent[50],
  },
});
