/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { ICON_SUCCESS } from '@assets/index';
import { PropsItemProduct } from '@types';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import styles from './styles';

const ItemProduct = (props: PropsItemProduct) => {
  const [quantity, setQuantity] = useState<number>(1);
  const { image, price, name } = props.item;
  const { addToCart } = props;
  const onChangeValue = (num: number) => {
    if (quantity === 1 && num === -1) {
      return;
    }
    setQuantity(quantity + num);
  };

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemLeftContainer}>
        <FastImage
          style={styles.imageStyle}
          source={{
            uri: image || 'https://www.ormondbeachmartialarts.com/wp-content/uploads/2017/04/default-image.jpg',
          }}
        ></FastImage>
        <Text style={styles.txtPrice}>
          {price} <Text>euros</Text>
        </Text>
      </View>
      <View style={styles.itemRightContainer}>
        <View style={styles.itemTopRight}>
          <Text style={styles.txtItemTopRight}>{name}</Text>
        </View>
        <View style={styles.itemBottomRight}>
          <View style={styles.controlLeft}>
            <TouchableOpacity onPress={() => onChangeValue(1)}>
              <View style={styles.btnCircle}>
                <Text>+</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.txtCount}>
              <Text>{quantity}</Text>
            </View>
            <TouchableOpacity onPress={() => onChangeValue(-1)}>
              <View style={styles.btnCircle}>
                <Text>-</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.btnCartContainer}>
            <TouchableOpacity onPress={() => addToCart(props.item, quantity)} style={styles.btnCart}>
              <FastImage style={styles.iconCart} source={ICON_SUCCESS}></FastImage>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemProduct;
