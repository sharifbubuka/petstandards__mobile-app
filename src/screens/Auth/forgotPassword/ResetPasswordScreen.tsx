import { FC, useState } from "react";
import { StyleSheet, useWindowDimensions, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BaseInput, DigitInput } from 'components/Inputs'
import { BaseButton } from "components/Buttons";
import { SubmitHandler, useForm } from "react-hook-form";

const ResetPasswordScreen: FC = () => {
  const [code, setCode] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRepeat, setPasswordRepeat] = useState<string>("");

  const { height, width } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { control, handleSubmit } = useForm();

  const onSubmitPressed = () => {
    navigation.navigate('Signin')
  };


  const onSignInPressed = () => {
    navigation.navigate('Signin');
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root, { minHeight: height }]}>
          <Text style={[styles.title, { marginTop: height * 0.1, marginBottom: height * 0.05 }]}>Reset your password</Text>

          <DigitInput 
            digitsCount={4}
            digitsNames={['Code1', 'Code2', 'Code3', 'Code4']}
            name="code"
            control={control}
          />

          <BaseInput 
            placeholder="Enter your new password" 
            secureTextEntry={true}
            name="password"
            control={control}
            rules={{ 
              required: 'Password is requried.',
              min: { value: 8, message: 'Password should be at least 8 characters' } 
             }}
          />
          
          <BaseInput 
            placeholder="Renter your new password" 
            secureTextEntry={true}
            name="passwordRepeat"
            control={control}
            rules={{ 
              required: 'Password confirmation is requried.',
              min: { value: 8, message: 'Password should be at least 8 characters' } 
             }}
          />

          <BaseButton text="Submit" onPress={handleSubmit(onSubmitPressed)} />

          <BaseButton text="Back to sign in" onPress={onSignInPressed} type="Tertiary" fgColor="#FDB075" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ResetPasswordScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  	color: '#051C68',
    margin: 10,
    width: '100%'
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