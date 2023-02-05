import { BaseIcon, ICON_NAMES } from 'components/Icon';
import { FC, useState, useEffect } from 'react';
import { View, Pressable, TextInput, StyleSheet, Text, ViewStyle } from 'react-native';

type Props = {
  width?: number
  height?: number,
  styles?: ViewStyle
}

const BaseStepper: FC<Props> = ({
  width = 180,
  height = 50,
  styles
}) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => setValue(value + 1);
  const handleDecrement = () => (value != 1) ? setValue(value - 1) : value;

  return (
    <View style={[BaseStyles.container, styles]}>
      <Pressable style={[BaseStyles.iconBox, { width:  height }]} onPress={() => handleDecrement()}>
        <BaseIcon name={ICON_NAMES.MINUS} color={'white'} />
      </Pressable>
      {/* <TextInput editable={false} value={value.toString()} keyboardType='numeric' style={[styles.input]} /> */}
      <Text style={[BaseStyles.input]}>{value}</Text>
      <Pressable style={[BaseStyles.iconBox, { width: height }]} onPress={() => handleIncrement()}>
        <BaseIcon name={ICON_NAMES.PLUS} color={'white'} />
      </Pressable>
    </View>
  )
}

export default BaseStepper;

const BaseStyles = StyleSheet.create({
  container: {
    width: 180,
    height: 50,
    borderRadius: 15,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  iconBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    backgroundColor: 'blue'
  },
  input: {
    flex: 1,
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    // backgroundColor: 'red',
    fontWeight: '400',
    fontSize: 22,
    borderWidth: 2,
    borderColor: 'blue'
  }
});