import translate from '@localize/index';
import { RootState } from '@reducers/index';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';

export interface Props {
  mainText?: string;
  leftText?: any;
  leftAction?: any;
  leftComponent?: any;
  noShadow?: boolean;
  imageLeft?: any;
  actionRight?: any;
  styleMainText?: any;
  styleContainer?: any;
  stylesHeader?: any;
  stylesHeaderImage?: any;
  stylesHeaderText?: any;
  stylesTextRight?: any;
  stylesTextLeft?: any;
  stylesImageLeft?: any;
  children?: any;
}

const hitSlop = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};
const Header = (props: Props) => {
  const isConnected = useSelector<RootState>((state: RootState) => state.networkStatus.isConnected) as boolean;
  const {
    mainText = '',
    leftText,
    leftAction,
    leftComponent,
    noShadow = false,
    imageLeft,
    actionRight = [],
    styleMainText = {},
    styleContainer = {},
    stylesHeader = {},
    stylesHeaderImage = {},
    stylesHeaderText = {},
    stylesTextRight = {},
    stylesTextLeft = {},
    stylesImageLeft = {},
    children,
  } = props;
  const containerStyles = noShadow ? styles.containerNoShadow : styles.container;
  return (
    <View style={[containerStyles, styleContainer]}>
      <View pointerEvents={'box-none'} style={[styles.headerContainer, stylesHeader]}>
        <View style={isConnected ? { ...styles.statusDisconnected, height: 0 } : styles.statusDisconnected}>
          <Text style={styles.txtStatusDisconnected}>{translate('network.status')}</Text>
        </View>

        <View pointerEvents={'box-none'} style={[styles.styleTitle, styleMainText]}>
          {mainText ? (
            <Text numberOfLines={1} ellipsizeMode="tail" style={[styles.headerText, stylesHeaderText]}>
              {mainText || ''}
            </Text>
          ) : null}
          {children && <View style={{ flex: 1, paddingTop: 15 }}>{children}</View>}
        </View>
        <TouchableOpacity
          style={[styles.secondaryHeaderImage, stylesHeaderImage]}
          hitSlop={hitSlop}
          onPress={leftAction}
        >
          {imageLeft ? (
            <Image resizeMode="cover" style={[styles.iconRight, stylesImageLeft]} source={imageLeft} />
          ) : leftComponent ? (
            leftComponent
          ) : null}
          {leftText ? (
            <Text style={[styles.secondaryHeaderText, styles.cancelText, stylesTextLeft]}>{leftText}</Text>
          ) : null}
        </TouchableOpacity>
        <View pointerEvents={'box-none'} style={{ flexDirection: 'row', alignItems: 'center' }}>
          {actionRight.map((value: any, index: number) => {
            // if (!value.component) return null;
            return (
              <TouchableOpacity
                key={index}
                hitSlop={hitSlop}
                style={[styles.secondaryHeaderImage, index > 0 ? { marginLeft: 20 } : {}, value.styleTouchable || {}]}
                onPress={value.action}
              >
                {value.component && value.component}
                {value.icon && <Image style={styles.iconRight} resizeMode="cover" source={value.icon} />}
                {value.text && <Text style={[styles.secondaryHeaderText, stylesTextRight]}>{value.text || ''}</Text>}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Header;
