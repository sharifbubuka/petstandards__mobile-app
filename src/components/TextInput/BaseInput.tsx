import { FC } from "react"
import { Control, Controller } from "react-hook-form"
import { TextInput, View, StyleSheet, Text } from "react-native"

type Props = {
  name: string,
  placeholder?: string,
  keyboardType?: 'default' | 'email-address' | 'number-pad' | 'name-phone-pad' | 'numeric' | 'numbers-and-punctuation' | 'phone-pad' | 'visible-password' | 'url'
  secureTextEntry?: boolean,
  control: Control,
  rules?: any
}

const BaseInput: FC<Props> = ({ control, name, placeholder, secureTextEntry = false, keyboardType = 'default', rules = {}}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
        <>
          <View style={[styles.container, error ? { borderColor: 'red' } : { borderColor: 'e8e8e8' }]}>
            <TextInput 
              value={value} 
              onChangeText={onChange}
              onBlur={onBlur}
              style={styles.input}
              placeholder={placeholder} 
              secureTextEntry={secureTextEntry}
              keyboardType={keyboardType}
            />
          </View>
          {error && <Text style={styles.error}>{error.message || 'Error'}</Text>}
        </>
      )}
    />
  )
}

export default BaseInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    borderColor: 'e8e8e8',
    borderWidth: 1,
    paddingHorizontal: 16,
    marginVertical: 10
  },
  input: {
    paddingVertical: 10,
    fontSize: 16
  },
  error: {
    color: 'red',
    alignSelf: 'stretch'
  }
})