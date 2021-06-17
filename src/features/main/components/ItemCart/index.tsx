import styles from './styles';
import { PropsItemProductInCart } from '@types';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { useDispatch } from 'react-redux';
import { decreaseCount, increaseCount } from '@actions/cart.action';

const ItemCart = (props: PropsItemProductInCart) => {
  const { image, price, name, id } = props.item;
  const { quantity, onRemove } = props;
  const dispatch = useDispatch();
  const onChangeValue = (num: number) => {
    if (num) {
      dispatch(increaseCount({ id: id }));
    } else {
      if (quantity === 1) {
        return;
      }
      dispatch(decreaseCount({ id: id }));
    }
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
          {price} <Text style={{ fontWeight: '300' }}>euros</Text>
        </Text>
      </View>
      <View style={styles.itemRightContainer}>
        <View style={styles.itemTopRight}>
          <Text style={styles.txtItemTopRight}>{name}</Text>
        </View>
        <View style={styles.itemCenterRight}>
          <TouchableOpacity onPress={() => onChangeValue(1)}>
            <View style={styles.btnCircle}>
              <Text>+</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.txtCount}>
            <Text>{quantity}</Text>
          </View>
          <TouchableOpacity onPress={() => onChangeValue(0)}>
            <View style={styles.btnCircle}>
              <Text>-</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.itemBottomRight}>
          <View style={styles.controlLeft}>
            <TouchableOpacity onPress={() => onRemove(props.item)} style={styles.btnRemove}>
              <Text style={{ color: 'white' }}>REMOVE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemCart;
