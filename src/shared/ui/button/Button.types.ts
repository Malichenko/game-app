import { type GestureResponderEvent, StyleProp, ViewStyle } from 'react-native';

export type Variant = 'primary' | 'secondary' | 'danger';

export interface ButtonProps {
  onPress: null | ((event: GestureResponderEvent) => void) | undefined;
  children: React.ReactNode;
  variant?: Variant;
  style?: StyleProp<ViewStyle>;
}
