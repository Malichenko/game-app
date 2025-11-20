import { StyleSheet } from 'react-native';

import theme from '@shared/config/theme';

export const styles = StyleSheet.create({
  button: {
    borderRadius: 28,
    paddingVertical: theme.spacing.x2,
    paddingHorizontal: theme.spacing.x4,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    overflow: 'hidden',
  },
  buttonPrimary: {
    backgroundColor: theme.palette.primary[60],
  },
  textPrimary: {
    color: theme.palette.neutral[10],
  },
  buttonSecondary: {
    backgroundColor: theme.palette.secondary[60],
  },
  textSecondary: {
    color: theme.palette.neutral[10],
  },
  buttonDanger: {
    backgroundColor: theme.palette.danger[60],
  },
  textDanger: {
    color: theme.palette.neutral[10],
  },
});
