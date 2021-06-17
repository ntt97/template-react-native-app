import styles from './styles';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import Text from '@components/CustomText';

interface OverlayCustomProps {
  modalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  footerChildren?: any;
  title?: string;
  description?: string;
  isClickBackdropHide?: boolean;
  children?: any;
  width?: string;
  styleContainer?: any;
  customStyleOverlay?: any;
  customStyleFooter?: any;
  iconClose?: any;
}
const OverlayCustom = ({
  modalVisible,
  setModalVisible,
  footerChildren,
  title,
  description,
  isClickBackdropHide = true,
  children = null,
  styleContainer = {},
  customStyleOverlay = {},
  customStyleFooter = {},
  iconClose = null,
}: OverlayCustomProps) => {
  return (
    <Overlay
      isVisible={modalVisible}
      onBackdropPress={() => (isClickBackdropHide ? setModalVisible(false) : false)}
      overlayStyle={[styles.overlayStyle, customStyleOverlay]}
      width={'80%'}
    >
      <View style={[styles.centeredView, styleContainer]}>
        <View>
          {title ? <Text text={title} style={styles.modalTitle} /> : null}
          {description ? <Text text={description} style={styles.modalDes} /> : null}
          {children}
        </View>
        {footerChildren && <View style={[styles.modalFooter, customStyleFooter]}>{footerChildren()}</View>}
      </View>
    </Overlay>
  );
};

export default OverlayCustom;
