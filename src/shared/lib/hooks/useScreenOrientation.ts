import { useWindowDimensions } from 'react-native';

export const useScreenOrientation = () => {
  const { width, height } = useWindowDimensions();

  const isPortrait = width < height;

  return {
    portrait: isPortrait,
    landscape: !isPortrait,
  };
};
