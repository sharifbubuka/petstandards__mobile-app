import { BaseIcon, ICON_NAMES } from 'components/Icon';
import { BaseTypography } from 'components/Typography';
import { Component, FC, ReactNode, useState } from 'react';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type Props = {
  size?: number
  children?: string
  textComponent?: ReactNode
  onPress: () => void 
  disableText?: boolean
  style?: ViewStyle,
  textStyle?: TextStyle
  outerIconStyle?: ViewStyle
  innerIconStyle?: ViewStyle
  checked: boolean
  fillColor?: string
  unfillColor?: string
  useNativeDriver?: boolean
  iconComponent?: ReactNode
  icon?: ICON_NAMES,
  iconSize?: number
  iconColor?: string
  disableBuiltInState?: boolean
  textContainerStyle?: ViewStyle
  TouchableComponent?: Component
}

const IconComponent: FC<{ 
  visible: boolean, 
  icon: ICON_NAMES,
  iconSize: number,
  iconColor: string,
  fillColor: string
 }> = ({ visible, icon, iconSize, iconColor, fillColor }) => {
  if (visible) return (
    <BaseIcon name={icon} size={iconSize} color={iconColor} />
  )
  else return (
    <BaseIcon name={icon} size={iconSize} color={fillColor} />
  )
}

const BaseCheckBox: FC<Props> = ({
  size = 18,
  children,
  textComponent,
  onPress, 
  disableText,
  style,
  textStyle,
  outerIconStyle,
  innerIconStyle = { borderWidth: 2 },
  checked,
  fillColor = 'blue',
  unfillColor = 'transparent',
  useNativeDriver = true,
  icon = ICON_NAMES.SUN,
  iconSize = 16,
  iconColor = 'black',
  iconComponent,
  disableBuiltInState = false,
  textContainerStyle,
  TouchableComponent,
}) => {
  return (
    <BouncyCheckbox
      size={size}
      textComponent={textComponent ? textComponent 
        : children ? <BaseTypography styles={style ? [baseStyles.text, style]: [baseStyles.text]} type='caption'>{children && children}</BaseTypography>
        : <></>} 
      onPress={onPress}
      disableText={disableText}
      style={style} 
      iconStyle={[outerIconStyle, {
        borderRadius: 3
      }]}
      innerIconStyle={[innerIconStyle, {
        borderRadius: 3,
        borderWidth: 3
      }]}
      isChecked={checked}
      fillColor={fillColor}
      unfillColor={unfillColor}
      useNativeDriver={useNativeDriver}
      iconComponent={iconComponent}
    />
  )
}

export default BaseCheckBox;

const baseStyles = StyleSheet.create({
  text: {
    marginLeft: 10
  }
});