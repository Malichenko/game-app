import { useWindowDimensions } from 'react-native';

export const useScreenOrientation = () => {
  const { width, height } = useWindowDimensions();

  return {
    portrait: width < height,
    landscape: width > height,
  };
};
