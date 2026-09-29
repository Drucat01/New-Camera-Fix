import { StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';


export const styles = StyleSheet.create({
  shell: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.desktopBackground
  },
  app: {
    flex: 1,
    width: '100%',
    maxWidth: SIZES.appMaxWidth,
    backgroundColor: COLORS.background,
    overflow: 'hidden'
  }
});
