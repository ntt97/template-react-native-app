import { isIOS } from '@constants/platform';
import { StyleSheet } from 'react-native';
import { colors, WIDTH, HEIGHT } from '@constants/vars';

const sidePadding = WIDTH * 0.05;
const topPadding = isIOS ? 15 : 0;
import { isIphoneX } from 'react-native-iphone-x-helper';

const IPHONE12_H = 844;
const IPHONE12_Max = 926;
const IPHONE12_Mini = 780;

const isIPhoneXII = (() => {
  if (!isIOS) return false;
  return (isIOS && HEIGHT === IPHONE12_H) || HEIGHT === IPHONE12_Max || HEIGHT === IPHONE12_Mini;
})();

const nHeight = (() => {
  if (isIPhoneXII) {
    return 130;
  } else if (isIphoneX()) {
    return 90;
  } else if (isIOS) {
    return 80;
  } else {
    return 60;
  }
})();

// width = 375 for IPhone X
const bottomPadding = 0;
export default StyleSheet.create({
  container: {
    width: WIDTH,
    shadowColor: colors.BLACK,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  containerNoShadow: {
    width: WIDTH,
  },
  headerContainer: {
    height: nHeight,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.LIGHT_BLUE,
    flexDirection: 'row',
    paddingTop: topPadding,
    paddingBottom: bottomPadding,
    paddingLeft: sidePadding,
    paddingRight: sidePadding,
  },
  headerText: {
    top: 20,
    textAlign: 'center',
    width: WIDTH * 0.8,
    fontSize: 20,
    color: colors.WHITE,
    fontWeight: 'bold',
  },
  secondaryHeaderText: {
    top: 10,
    left: 5,
    minWidth: 50,
  },
  styleTitle: {
    position: 'absolute',
    width: WIDTH,
    flex: 1,
    alignItems: 'center',
    paddingBottom: 10,
  },
  secondaryHeaderImage: {
    marginTop: 10,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: 20,
  },
  cancelText: {
    color: colors.cancel,
  },
  doneText: {
    color: colors.done,
  },
  iconRight: {
    width: 25,
    height: 25,
    margin: 10,
    tintColor: '#fff',
  },
  statusDisconnected: {
    height: 90,
    position: 'absolute',
    backgroundColor: 'red',
    top: 0,
    left: 0,
    width: WIDTH,
    zIndex: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtStatusDisconnected: {
    fontSize: 18,
    color: 'blue',
  },
});
