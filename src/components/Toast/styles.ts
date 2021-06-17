import { colors } from '@constants/vars';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row',
    backgroundColor: colors.background,
    borderRadius: 20,
    shadowColor: '#00000029',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textStyle: {
    color: colors.bluePrimary,
    paddingLeft: 5,
    fontSize: 14,
  },
});
export default styles;
