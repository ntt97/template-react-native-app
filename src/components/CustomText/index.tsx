import { View, StyleProp, TextStyle } from 'react-native';
import styles from './styles';
import { Text } from 'react-native';
import React from 'react';

interface Props {
  text: string;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  stylesContainer?: StyleProp<TextStyle>;
  ellipsizeMode?: string;
}

const CustomText = (props: Props) => {
  const { text, style, numberOfLines = 0, stylesContainer } = props;

  return (
    <View style={[styles.container, stylesContainer]}>
      <Text style={[styles.title, style]} allowFontScaling={false} numberOfLines={numberOfLines}>
        {text}
      </Text>
    </View>
  );
};

export default CustomText;
