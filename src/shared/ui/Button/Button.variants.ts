import { styles } from "./Button.styles";
import type { Variant } from "./Button.types";
import { type ViewStyle, type TextStyle } from "react-native";

const BUTTON_MAP: Record<Variant, ViewStyle> = {
  primary: styles.buttonPrimary,
  secondary: styles.buttonSecondary,
  danger: styles.buttonDanger,
};

const TEXT_MAP: Record<Variant, TextStyle> = {
  primary: styles.textPrimary,
  secondary: styles.textSecondary,
  danger: styles.textDanger,
};

export const getButtonStyle = (variant: Variant): ViewStyle => {
  return BUTTON_MAP[variant];
};

export const getTextStyle = (variant: Variant): TextStyle => {
  return TEXT_MAP[variant];
};
