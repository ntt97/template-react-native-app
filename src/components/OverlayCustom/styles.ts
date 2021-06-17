import { StyleSheet } from 'react-native';
import { colors } from '@constants/vars';

const styles = StyleSheet.create({
  centeredView: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  overlayStyle: {
    borderRadius: 20,
    marginVertical: 20,
  },

  textStyle: {
    color: 'white',
    textAlign: 'center',
  },
  modalTitle: {
    marginTop: 0,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 17,
    color: colors.bluePrimary,
    lineHeight: 23,
  },
  modalDes: {
    fontSize: 15,
    // lineHeight: 15,
    color: colors.bluePrimary,
    textAlign: 'center',
  },
  modalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 20,
    paddingVertical: 5,
    marginTop: 15,
  },
  textButtonLeft: {
    color: '#2CB9AA',
    fontSize: 13,
    textTransform: 'uppercase',
    lineHeight: 18,
  },
  textButtonRight: {
    color: colors.white,
    fontSize: 13,
    textTransform: 'uppercase',
    lineHeight: 18,
  },
});

export default styles;
