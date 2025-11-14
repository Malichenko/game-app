import { type FC, useRef } from "react";
import { Pressable, Text, Animated } from "react-native";
import { type ButtonProps, type Variant } from "./types";
import { styles } from "./styles";

type Styles = typeof styles;

type ButtonStyle =
  | Styles["buttonPrimary"]
  | Styles["buttonSecondary"]
  | Styles["buttonDanger"];
type TextStyle =
  | Styles["textPrimary"]
  | Styles["textSecondary"]
  | Styles["textDanger"];

const getButtonStyle = (variant: Variant): ButtonStyle => {
  switch (variant) {
    case "primary":
      return styles.buttonPrimary;
    case "secondary":
      return styles.buttonSecondary;
    case "danger":
      return styles.buttonDanger;
    default: {
      const exhaustiveCheck: never = variant;
      throw new Error(`Unhandled variant: ${exhaustiveCheck}`);
    }
  }
};

const getTextStyle = (variant: Variant): TextStyle => {
  switch (variant) {
    case "primary":
      return styles.textPrimary;
    case "secondary":
      return styles.textSecondary;
    case "danger":
      return styles.textDanger;
    default: {
      const exhaustiveCheck: never = variant;
      throw new Error(`Unhandled variant: ${exhaustiveCheck}`);
    }
  }
};

export const Button: FC<ButtonProps> = ({
  onPress,
  children,
  variant = "primary",
}) => {
  const opacity = useRef(new Animated.Value(1)).current;

  const fadeToValue = (value: number) => () => {
    Animated.timing(opacity, {
      toValue: value,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const dynamicButtonStyle = getButtonStyle(variant);
  const dynamicTextStyle = getTextStyle(variant);

  return (
    <Pressable
      onPressIn={fadeToValue(0.75)}
      onPressOut={fadeToValue(1)}
      onPress={onPress}
    >
      <Animated.View style={[styles.button, dynamicButtonStyle, { opacity }]}>
        <Text style={dynamicTextStyle}>{children}</Text>
      </Animated.View>
    </Pressable>
  );
};
