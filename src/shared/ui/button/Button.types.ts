import { type GestureResponderEvent } from 'react-native';

export type Variant = 'primary' | 'secondary' | 'danger';

export interface ButtonProps {
  onPress: null | ((event: GestureResponderEvent) => void) | undefined;
  children: React.ReactNode;
  variant?: Variant;
}
