import { BaseIcon, ICON_NAMES } from "components/Icon";
import { FC } from "react";
import { StyleSheet, Text, GestureResponderEvent, View, TouchableHighlight, ViewStyle } from "react-native";

type Props = {
  children: string,
  type?: 'primary' | 'secondary' | 'tertiary',
  icon?: ICON_NAMES
  iconSize?: number
  color?: string
  styles?: ViewStyle
  onPress: ((event: GestureResponderEvent) => void)
}

const BaseButton: FC<Props> = ({ children, type = 'primary', onPress, icon, iconSize = 22, styles, color = 'white' }) => {
  return (
    <TouchableHighlight 
      style={[baseStyles.wrapper, styles]} 
      activeOpacity={0.8} 
      underlayColor="#FFFFFF" 
      onPress={onPress}
    >
      <View style={[baseStyles.button, baseStyles[`button_${type}`]]}>
        {icon && <View style={baseStyles.icon}>
          <BaseIcon name={icon} size={iconSize} color={color} />
        </View>}
        <Text style={[baseStyles.text, { color: color }]}>{children}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default BaseButton;

const baseStyles = StyleSheet.create({
  wrapper: {
    borderRadius: 10,
    shadowColor: "#111",
    width: '100%',
    // shadowOffset: {
	  // width: 100,
	  // height: 12,
    // },
    // shadowOpacity: 0.58,
    // shadowRadius: 16.00,
    // elevation: 5
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    left: 15
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  button_primary: {
    backgroundColor: '#752ed1',
  },
  button_secondary: {
    backgroundColor: 'green',
  },
  button_tertiary: {
    backgroundColor: 'red',
  }
})