import { type FC, useRef } from "react";
import {
  type GestureResponderEvent,
  Pressable,
  Text,
  Animated,
} from "react-native";
import { StyleSheet } from "react-native";

type Variant = "primary" | "secondary" | "danger";

interface ButtonProps {
  onPress: null | ((event: GestureResponderEvent) => void) | undefined;
  children: React.ReactNode;
  variant?: Variant;
}

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

const styles = StyleSheet.create({
  button: {
    borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    elevation: 2,
    overflow: "hidden",
  },
  buttonPrimary: {
    backgroundColor: "#72063c",
  },
  textPrimary: {
    color: "white",
  },
  buttonSecondary: {
    backgroundColor: "green", // - change to theme color
  },
  textSecondary: {
    color: "white",
  },
  buttonDanger: {
    backgroundColor: "red", // - change to theme color
  },
  textDanger: {
    color: "white",
  },
});
