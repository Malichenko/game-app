import { StyleSheet } from 'react-native';

export const createScreenLayoutStyles = (
  padding?: number,
  paddingHorizontal?: number,
  paddingVertical?: number,
  gap?: number,
) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      ...(padding !== undefined && { padding }),
      ...(paddingHorizontal !== undefined && { paddingHorizontal }),
      ...(paddingVertical !== undefined && { paddingVertical }),
      ...(gap !== undefined && { gap }),
    },
  });
};
