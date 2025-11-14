import { type FC, useRef } from "react";
import { Pressable, Text, Animated } from "react-native";
import { type ButtonProps } from "./Button.types";
import { styles } from "./Button.styles";
import { getButtonStyle, getTextStyle } from "./button.variants";

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
