import { FC } from "react";
import { StyleSheet, TouchableHighlight } from "react-native";
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  dimensions: number
  backgroundColor: string
  underlayColor: string
  iconColor?: string
  right?: number
  left?: number
  bottom?: number
  top?: number
  onPress: () => void
} 

const FloatingActionButton: FC<Props> = ({ 
  iconColor = 'white', 
  onPress, 
  dimensions,
  right,
  left,
  bottom,
  backgroundColor,
  underlayColor,
  top
}) => {
  return (
    <TouchableHighlight 
      style={[
        styles.button, { 
          width: dimensions,
          height: dimensions,
          position: 'absolute',
          right: right,
          left: left,
          top: top,
          bottom: bottom,
          backgroundColor: backgroundColor,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 100 
        }
      ]}
      underlayColor={underlayColor}
      onPress={onPress}
      activeOpacity={0.2}
      >
        <MaterialIcon style={{ zIndex: 100 }} name="plus" size={dimensions / 2} color={iconColor} />
    </TouchableHighlight>
  )
}

export default FloatingActionButton;

const styles =  StyleSheet.create({
  button: {

  }
});