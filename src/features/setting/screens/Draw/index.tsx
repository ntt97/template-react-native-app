/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { CustomAvatar } from '@components/CustomAvatar';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import translate from '@localize/index';
import { setIsLogin } from 'helpers';
import NavigationActionsService from 'navigation';
import AuthNav from 'navigation/authNav';
import React from 'react';
import { ImageBackground, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
export interface Menu {
  [x: string]: any;
  icon: string;
  name: string;
}

const uriBackground =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZpWjlBsuXkfYI62nlt7YG70JAprX9xtnLIQ&usqp=CAU';
const uriAvatar =
  'https://scontent.fsgn2-5.fna.fbcdn.net/v/t1.6435-9/149765014_432485268086123_5490525660219629074_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=LoaTcORigWwAX_ofSCR&_nc_ht=scontent.fsgn2-5.fna&oh=bb176520a66aece63ea3ab14a9da8e94&oe=60E5FA83';

const listMenu = [
  {
    icon: '',
    name: '',
  },
  {
    icon: '',
    name: '',
  },
  {
    icon: '',
    name: '',
  },
];

const SideMenu = (props: any) => {
  const onLogout = () => {
    NavigationActionsService.showLoading();
    setTimeout(() => {
      setIsLogin(false);
      AuthNav();
      NavigationActionsService.hideLoading();
    });
  };

  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: uriBackground,
      }}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.profileContainer}>
          <CustomAvatar style={styles.avatarStyle} uri={uriAvatar} />
          <CustomText style={styles.txtLabel} text="Vip" />
          <CustomText style={styles.txtName} text="Nguyen Thanh To" />
          <CustomText text="---------:-:---------" />
        </View>
        <View style={styles.menuContainer}></View>
        <View style={styles.footerContainer}>
          <CustomButton onPress={onLogout} text={translate('authentication.logout_button')}></CustomButton>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SideMenu;
