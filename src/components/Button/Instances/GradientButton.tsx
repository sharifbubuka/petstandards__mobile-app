import { BaseIcon, ICON_NAMES } from "components/Icon";
import { FC } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, GestureResponderEvent, View, TouchableHighlight, ViewStyle } from "react-native";

type Props = {
  children: string,
  icon?: ICON_NAMES
  iconSize?: number
  gradient: {
    colors: string[]
    end?: { x: number, y: number }
    locations?: number[]
    start?: { x: number, y: number }
  }
  color?: string
  styles?: ViewStyle
  onPress: (() => void)
}

const GradientButton: FC<Props> = ({ 
  children, 
  icon, 
  iconSize = 22, 
  styles, 
  color = 'white',
  gradient,
  onPress
}) => {
  if (gradient.colors.length >= 2) {
    return (
      <TouchableHighlight 
        style={[baseStyles.wrapper, styles]} 
        activeOpacity={0.8} 
        underlayColor="#FFFFFF" 
        onPress={onPress}
      >
        <LinearGradient colors={gradient.colors} start={gradient.start} end={gradient.end} locations={gradient.locations} style={[baseStyles.button]}>
          {icon && <View style={baseStyles.icon}>
            <BaseIcon name={icon} size={iconSize} color={color} />
          </View>}
          <Text style={[baseStyles.text, { color: color }]}>{children}</Text>
        </LinearGradient>
      </TouchableHighlight>
    )
  } else {
    return (
      <></>
    )
  }
}

export default GradientButton;

const baseStyles = StyleSheet.create({
  wrapper: {
    borderRadius: 10
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
  }
})