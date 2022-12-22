import { FC, ReactNode } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

type Props = {
  children: ReactNode
  type?: 'Primary' | 'Secondary' | 'Tertiary'
  onPress: () => void
  backgroundColor?: string
  textColor?: string 
  BorderRadius?: number
  Ripple?: boolean
}

const BaseButton: FC<Props> = ({
  children,
  type = 'Primary',
  backgroundColor = 'blue',
  textColor = 'white',
  onPress,
  Ripple = true
}) => {
  return (
    // <View 
    //   style={[
    //     styles.container
    //   ]}
    // >
      <Pressable 
        onPress={onPress}
        android_ripple={{ color: 'gray' }}
        style={[
          styles.button,
          
        ]}
      >
        <Text
          style={[
            styles.text,
            textColor && { color: textColor }
          ]}
        >{children}</Text>
      </Pressable>
    // </View>
  )
}

export default BaseButton;

const styles = StyleSheet.create({
  container: {
    
  },
  button: {
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    overflow: 'hidden'
  },
  text: {

  }
});