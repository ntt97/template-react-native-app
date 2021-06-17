import React from 'react';
import styles from './styles';
import { Input } from 'react-native-elements';
import { View, Image } from 'react-native';
import { CustomTouchable } from '../CustomTouchable';
import { CLOSED_EYE, OPEN_EYE } from '@assets/index';
import CustomText from '../CustomText';

const CustomInput = ({
  name,
  description,
  descriptionStyle,
  customInputStyle,
  inputContainerStyle,
  inputStyle,
  containerStyle,
  placeholder,
  placeholderColor,
  value,
  secureTextEntry,
  onPressEye,
  inputRef,
  rightIcon,
  onPressRightIcon,
  rightIconStyle,
  pointerEvents = 'auto',
  editable = true,
  multiline = false,
  ...rest
}: any) => (
  <View style={[{ alignItems: 'flex-start' }]}>
    {description ? <CustomText style={[styles.description, descriptionStyle]} text={description} /> : null}
    <View style={[styles.formBar, customInputStyle]}>
      <Input
        {...rest}
        ref={inputRef}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={placeholderColor ? placeholderColor : 'grey'}
        name={name}
        value={value}
        placeholder={placeholder}
        allowFontScaling={false}
        editable={editable}
        inputStyle={[styles.inputStyle, inputStyle]}
        inputContainerStyle={[styles.inputContainer, inputContainerStyle]}
        containerStyle={[styles.container, containerStyle]}
        pointerEvents={pointerEvents}
        multiline={multiline}
      />
      {onPressEye && (
        <CustomTouchable style={[styles.iconContainer, rightIcon && { marginRight: 50 }]} onPress={onPressEye}>
          <Image
            style={[styles.iconStyle, rightIconStyle]}
            source={secureTextEntry ? CLOSED_EYE : OPEN_EYE}
            resizeMode={'contain'}
          />
        </CustomTouchable>
      )}
      {rightIcon && (
        <CustomTouchable style={[styles.iconContainer]} onPress={onPressRightIcon}>
          <Image style={[styles.iconStyle, rightIconStyle]} resizeMode="cover" source={rightIcon} />
        </CustomTouchable>
      )}
    </View>
  </View>
);

export default CustomInput;
