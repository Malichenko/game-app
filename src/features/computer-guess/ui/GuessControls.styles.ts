import { StyleSheet } from 'react-native';

import theme from '@shared/config/theme';

export const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.x3,
  },
  label: {
    fontSize: theme.fontSize.lg,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.x1,
  },
  buttonContainer: {
    flex: 1,
  },
});
