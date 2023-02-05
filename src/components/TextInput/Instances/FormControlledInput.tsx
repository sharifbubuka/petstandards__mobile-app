import { BaseIcon, ICON_NAMES } from "components/Icon"
import { BaseTypography } from "components/Typography"
import { FC } from "react"
import { Control, Controller } from "react-hook-form"
import { TextInput, View, StyleSheet, TextInputProps, ViewStyle, Pressable } from "react-native"

type Props = {
  styles?: ViewStyle
  icon?: ICON_NAMES
  iconColor?: string
  iconSize?: number,
  onIconPress?: () => void
  inputProps?: TextInputProps
  onChangeText?: (text: string) => void
  name: string
  control: Control
  rules?: any
}

const BaseInput: FC<Props> = ({
  styles,
  icon,
  iconColor = 'black',
  iconSize = 20,
  onIconPress = () => {},
  inputProps,
  onChangeText,
  name,
  control,
  rules,
}) => {

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <View style={[baseStyles.container, { marginBottom: styles?.marginBottom, marginVertical: styles?.marginVertical }]}>
          <View style={[baseStyles.wrapper, styles, { marginBottom: 10 }]}>
            <TextInput 
              placeholder={inputProps ? inputProps.placeholder : 'Provide custom placeholder'}
              value={value}
              style={[baseStyles.input, { borderColor: error ? 'red' : '#757b6c' }]}
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
          {error && error.message &&
            <BaseTypography styles={baseStyles.errorText} type="caption">{error.message}</BaseTypography>
          }
        </View>
      )}
    />
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
    borderWidth: 2,
    borderColor: '#bac5ac',
    borderRadius: 10,
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
    fontSize: 15,
    color: '#464a41'
  },
  errorText: {
    color: 'red',
    fontWeight: "400",
    marginBottom: 5
  }
});