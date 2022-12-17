import { FC } from "react";
import { StyleSheet, Text, Pressable, GestureResponderEvent } from "react-native";

type Props = {
  text: string,
  type?: 'Primary' | 'Secondary' | 'Tertiary',
  bgColor?: string,
  fgColor?: string,
  onPress: ((event: GestureResponderEvent) => void) | null | undefined
}

const BaseButton: FC<Props> = ({ text, type = "Primary", onPress, bgColor, fgColor }) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={[
        styles.container, 
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {}
    ]}>
      <Text style={[
        styles[`text_${type}`],
        fgColor ? { color: fgColor } : {}
      ]}>{text}</Text>
    </Pressable>
  )
}

export default BaseButton;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 15,
    marginVertical: 10,
    alignItems: 'center'
  },
  container_Primary: {
    backgroundColor: '#3B71F3'
  },
  container_Secondary: {
    borderColor: '#3B71F3',
    borderWidth: 2
  },
  container_Tertiary: {
    
  },
  text_Primary: {
    fontWeight: 'bold',
    color: 'white'
  },
  text_Secondary: {
    color: '#3B71F3',
  },
  text_Tertiary: {
    color: 'gray',
  }
})