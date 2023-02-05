import { BaseIcon, ICON_NAMES } from "components/Icon"
import { BaseTypography } from "components/Typography"
import { FC } from "react"
import { TextInput, View, StyleSheet, TextInputProps, ViewStyle, Pressable } from "react-native"

type Props = {
  value: string
  styles?: ViewStyle
  icon?: ICON_NAMES
  iconColor?: string
  iconSize?: number,
  onIconPress?: () => void
  inputProps?: TextInputProps
  onChangeText?: (text: string) => void
  errorMessage?: string,
}

const BaseInput: FC<Props> = ({
  value = 'Bubuka Sharif',
  styles,
  icon,
  iconColor = 'black',
  iconSize = 20,
  onIconPress,
  inputProps,
  onChangeText,
  errorMessage
}) => {

  return (
    <View style={[baseStyles.container, { marginBottom: styles?.marginBottom, marginVertical: styles?.marginVertical }]}>
      <View style={[baseStyles.wrapper, styles, { marginBottom: 10 }]}>
        <TextInput 
          placeholder={inputProps ? inputProps.placeholder : 'Provide custom placeholder'}
          value={value}
          style={[baseStyles.input, { borderColor: errorMessage ? 'red' : 'blue' }]}
          onChangeText={onChangeText}
          cursorColor='blue'
          {...inputProps} 
        />
        {(icon && !onIconPress) && 
        <View style={baseStyles.icon}>
          <BaseIcon name={icon} size={iconSize} color={iconColor} />
        </View>}
        {(icon && onIconPress) && 
        <Pressable style={baseStyles.icon} onPress={onIconPress}>
          <BaseIcon name={icon} size={iconSize} color={iconColor} />
        </Pressable>}
      </View>
      {errorMessage &&
        <BaseTypography styles={baseStyles.errorText} type="caption">{errorMessage}</BaseTypography>
      }
    </View>
  )
}

export default BaseInput;

const baseStyles = StyleSheet.create({
  container: {
    width: '100%'
  },
  wrapper: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden'
  },
  icon: {
    position: 'absolute',
    right: 15
  },
  input: {
    flex: 1,
    padding: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 5,
    borderColor: 'blue',
    fontSize: 15
  },
  errorText: {
    color: 'red',
    fontWeight: "400"
  }
});