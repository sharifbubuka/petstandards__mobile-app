import { FC, useState } from "react"
import { Control, Controller } from "react-hook-form"
import { TextInput, View, StyleSheet, Text } from "react-native"

type Digit = {
  name: string
}[]

type Props = {
  name: string,
  secureTextEntry?: boolean,
  control: Control,
  rules?: any,
  digitsCount?: number,
  digitsNames: string[],
  keyboardType?: 'default' | 'number-pad' | 'name-phone-pad' | 'numeric' | 'phone-pad'
}

const DigitInput: FC<Props> = ({ digitsCount = 4, digitsNames, control, keyboardType = 'numeric', secureTextEntry = false, rules = {}}) => {
  const [code, setCode] = useState(['', '', '', ''])
  
  let digitsArray: number[] = [];
  
  const displayDigitInputs = (digitsCount: number) => {
    for(let i = 0; i < digitsCount && i < 6; i++) {
      digitsArray[i] = i;
    }
  }

  displayDigitInputs(digitsCount);

  const handleOnChange = (text: string, index: number): void => {
    setCode(prevCode => {
      const newCode = prevCode;
      newCode[index] = text.split('')[index];
      return newCode;
    })
  }

  return (
    <View style={styles.container}>
      {digitsArray.map((index) => (
          <Controller
            key={index}
            control={control}
            name={digitsNames[index]}
            rules={rules}
            render={({ field: { value, onChange, onBlur }, fieldState: { error } }) => (
              <>
                <TextInput
                  value={code[index]}
                  style={[styles.input, { width: '20%' }]}
                  secureTextEntry={secureTextEntry}
                  keyboardType={keyboardType}
                  onChangeText={(text) => setCode(prevCode => {
                    let newCode = prevCode;
                    newCode[index] = text.split('')[0];
                    return prevCode;
                  })}
                  onBlur={onBlur}
                >{value}</TextInput>
                {error && <Text style={styles.error}>{error?.message}</Text>}
              </>
            )}
          />
      ))}
    </View>
  )
}

export default DigitInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    width: '100%',
    marginVertical: 10
  },
  input: {
    paddingVertical: 20,
    fontSize: 24,
    fontWeight: '700',
    borderColor: 'e8e8e8',
    borderWidth: 1,
    textAlign: 'center',
    borderRadius: 5
  },
  error: {
    color: 'red',
    alignSelf: 'stretch'
  }
})