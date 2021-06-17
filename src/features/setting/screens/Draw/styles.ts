import { StyleSheet } from 'react-native';
import { colors, FONT_WEIGHT_BOLD, WIDTH_RATIO } from '@constants/vars';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  avatarStyle: {
    width: 110 * WIDTH_RATIO,
    height: 110 * WIDTH_RATIO,
    borderRadius: (110 * WIDTH_RATIO) / 2,
    borderWidth: 5,
    borderColor: colors.BLUE_PICK,
  },
  txtLabel: {
    fontSize: 30 * WIDTH_RATIO,
    fontWeight: FONT_WEIGHT_BOLD,
    color: colors.SUCCESS,
    padding: 5,
  },
  txtName: {
    fontSize: 20 * WIDTH_RATIO,
    fontWeight: FONT_WEIGHT_BOLD,
    color: colors.PRIMARY,
    padding: 5,
  },
});
