import { BaseIcon, ICON_NAMES } from "components/Icon";
import { CircularProgress } from "components/Progress";
import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, GestureResponderEvent, View, TouchableHighlight, ViewStyle } from "react-native";

type Props = {
  children: string,
  type?: 'primary' | 'secondary' | 'tertiary',
  icon?: ICON_NAMES
  iconSize?: number
  color?: string
  styles?: ViewStyle
  loading: boolean
  loadingText?: string 
  loaderIconSize?: number
  onPress: (() => void)
}

const LoadableButton: FC<Props> = ({ 
  children, 
  type = 'primary', 
  styles, loading, 
  loadingText, 
  onPress, 
  icon, 
  iconSize,
  loaderIconSize = 15, 
  color = 'white' 
}) => {
  const [isLoading, setIsLoading] = useState(loading);

  useEffect(() => {
    setIsLoading(loading);
  }, [loading])
  
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
        {isLoading && <CircularProgress 
          rotating={isLoading} 
          size={loaderIconSize} 
          color='white' 
          borderWidth={2}
          strokeCap='round' 
          styles={{ marginRight: 7 }}  
        />}
        <Text style={[baseStyles.text, { color: color }]}>{isLoading && loadingText ? loadingText : children}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default LoadableButton;

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
  },
  button_primary: {
    backgroundColor: '#051C68',
  },
  button_secondary: {
    backgroundColor: 'green',
  },
  button_tertiary: {
    backgroundColor: 'red',
  }
});