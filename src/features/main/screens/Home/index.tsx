/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { addToCart } from '@actions/cart.action';
import { getProductWithSaga, setRefreshProductList } from '@actions/product.action';
import { RootState } from '@reducers/index';
import { PropsItemProduct } from '@types';
import NavigationActionsService from 'navigation';
import React, { useEffect } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import Header from '@components/Header';
import { useDispatch, useSelector } from 'react-redux';
import ItemProduct from '../../components/ItemProduct';
import styles from './styles';
import { ICON_CART, ICON_SETTING } from '@assets/index';
import translate from '@localize/index';
import { CART_SCREEN } from '@constants/screenKeys';
import ToastComponent from '@components/Toast';
import ItemLoading, { FooterLoading } from '../../components/ItemLoading';
import { ProductState } from '@reducers/product.reducer';
export interface Props {
  componentId?: string;
}

const HOME = (props: Props) => {
  const dispatch = useDispatch();
  const listData = useSelector<RootState>((state: RootState) => state.product) as ProductState;
  const listCart = useSelector<RootState>((state: RootState) => state.cart.listCart) as Array<any>;
  const { listProduct, isLoading, pagination, isEndData, refreshing } = listData;

  useEffect(() => {
    const count = listCart.length.toString();

    if (listCart.length > 0) {
      NavigationActionsService.showBadge(CART_SCREEN, count, ICON_CART);
    } else {
      NavigationActionsService.showBadge(CART_SCREEN, null, ICON_CART);
    }
  }, [listCart]);

  useEffect(() => {
    NavigationActionsService.initInstance(props.componentId);
    dispatch(
      getProductWithSaga({
        pagination: { page: 1, limit: 10 },
        refresh: true,
      }),
    );
  }, []);

  const onAddToCart = (item: any, quantity: number) => {
    const isExist = listCart.some((e: any) => e?.item.id === item.id);
    if (isExist) {
      ToastComponent('ERROR', translate('cart.exist_cart'));
      return;
    }
    dispatch(addToCart({ item, quantity }));
  };

  function renderFooter() {
    if (listProduct.length < 10 || !isLoading) {
      return null;
    }
    return (
      <View style={styles.footer}>
        <FooterLoading />
      </View>
    );
  }

  function handleRefresh() {
    if (listProduct.length === 0) {
      return false;
    }

    dispatch(setRefreshProductList(true));
    dispatch(
      getProductWithSaga({
        pagination: { page: 1, limit: 10 },
        refresh: true,
      }),
    );
  }

  function handleLoadMore() {
    if (!isEndData && !isLoading) {
      dispatch(
        getProductWithSaga({
          pagination: { ...pagination, page: pagination.page + 1 },
          refresh: false,
        }),
      );
    }
  }

  if (isLoading && listProduct.length <= 0) {
    return (
      <View style={{ flex: 1 }}>
        <Header
          imageLeft={ICON_SETTING}
          noShadow={true}
          mainText={translate('navigation.home')}
          leftAction={() => {
            NavigationActionsService.toggleDrawer(true);
          }}
        />
        <ItemLoading />
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
      <Header
        imageLeft={ICON_SETTING}
        noShadow={true}
        mainText={translate('navigation.home')}
        leftAction={() => {
          NavigationActionsService.toggleDrawer(true);
        }}
      />
      <View style={styles.container}>
        <View style={styles.body}>
          <FlatList
            data={listProduct}
            renderItem={(item: PropsItemProduct) => {
              return <ItemProduct {...item} addToCart={onAddToCart} />;
            }}
            keyExtractor={item => item.id}
            ListFooterComponent={renderFooter}
            onRefresh={handleRefresh}
            refreshing={refreshing}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            initialNumToRender={10}
          />
        </View>
      </View>
    </View>
  );
};

export default HOME;
