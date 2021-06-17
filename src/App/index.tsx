/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { initCart } from '@actions/cart.action';
import { handleChangeLanguage } from '@actions/language.action';
import LoadingScreen from '@components/Loading';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { getCart, getDefaultLanguage, isLogin } from 'helpers';
import I18n from 'i18n-js';
import { changeConnectionStatus } from 'modules/network/actions';
import AuthNav from 'navigation/authNav';
import MainNav from 'navigation/mainNav';
import React, { useEffect } from 'react';
import CodePush from 'react-native-code-push';
import SplashScreen from 'react-native-splash-screen';
import { useDispatch } from 'react-redux';

const App = (props: unknown) => {
  const dispatch = useDispatch();
  useEffect(() => {
    init();
    SplashScreen.hide();
    const unsubscribe = NetInfo.addEventListener(state => {
      handleConnectionChange(state);
    });
    renderScreen();
    return () => {
      // unsubscribe();
    };
  }, []);

  const init = async () => {
    const keyLanguage = (await getDefaultLanguage()) || 'en';
    I18n.defaultLocale = keyLanguage;
    I18n.locale = keyLanguage;
    dispatch(handleChangeLanguage(keyLanguage));
    const cart = await getCart();
    cart && dispatch(initCart(cart));
  };

  const renderScreen = async () => {
    const isLog = await isLogin();
    if (isLog) {
      MainNav();
    } else {
      AuthNav();
    }
  };

  const handleConnectionChange = (state: NetInfoState) => {
    if (state.isInternetReachable === null) return;

    dispatch(changeConnectionStatus({ isConnected: state.isInternetReachable }));
  };

  return <LoadingScreen></LoadingScreen>;
};

let codePushOptions = { checkFrequency: CodePush.CheckFrequency.MANUAL };
export default CodePush(codePushOptions)(App);
