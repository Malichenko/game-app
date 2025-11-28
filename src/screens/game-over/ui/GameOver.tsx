import { StyleSheet } from 'react-native';

import { ScreenLayout } from '@shared/ui/screen-layout';
import { GameOverWidget } from '@widgets/game-over';

export const GameOverScreen = () => {
  return (
    <ScreenLayout style={styles.container}>
      <GameOverWidget />
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
