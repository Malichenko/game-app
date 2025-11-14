import { StyleSheet } from "react-native";
import { palette, spacing } from "@shared/config/theme";

export const styles = StyleSheet.create({
  button: {
    borderRadius: 28,
    paddingVertical: spacing.x2,
    paddingHorizontal: spacing.x4,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    overflow: "hidden",
  },
  buttonPrimary: {
    backgroundColor: palette.primary[60],
  },
  textPrimary: {
    color: palette.neutral[10],
  },
  buttonSecondary: {
    backgroundColor: palette.secondary[60],
  },
  textSecondary: {
    color: palette.neutral[10],
  },
  buttonDanger: {
    backgroundColor: palette.danger[60],
  },
  textDanger: {
    color: palette.neutral[10],
  },
});
