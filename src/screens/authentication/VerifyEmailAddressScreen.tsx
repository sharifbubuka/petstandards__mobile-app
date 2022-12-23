import { FC, useState } from "react";
import { StyleSheet, useWindowDimensions, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BaseInput, DigitInput } from 'components/TextInput'
import { BaseButton } from "components/Button";
import { SubmitHandler, useForm } from "react-hook-form";

const ConfirmEmailScreen: FC = () => {
  const [code, setCode] = useState<string>("");

  const { height, width } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { control, handleSubmit } = useForm();

  const onConfirmPressed: SubmitHandler<any> = (data) => {
    // send user code in email
    navigation.navigate('ResetPassword');
  };
  
  const onResendPressed = () => console.warn("Resend Password");

  const onSignInPressed = () => {
    navigation.navigate('Signin')
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root, { minHeight: height }]}>
          <Text style={[styles.title, { marginTop: height * 0.1, marginBottom: height * 0.1 }]}>Confirm email address</Text>

          <DigitInput 
            digitsCount={4}
            digitsNames={['Code1', 'Code2', 'Code3', 'Code4']}
            name="code"
            control={control}
          />

          {/* <BaseButton text="Confirm" onPress={handleSubmit(onConfirmPressed)} />

          <BaseButton text="Resend code" onPress={onResendPressed} type="Secondary" />

          <BaseButton text="Back to sign in" onPress={onSignInPressed} type="Tertiary" /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ConfirmEmailScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  	color: '#051C68',
    margin: 10
  },
  codeDigits: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '100%',
    marginBottom: 15
  },
  digit: {
    width: '20%',
    height: 60
  },
  terms: {
    color: 'gray',
    marginVertical: 10
  },
  link: {
    color: '#FDB075'
  }
});