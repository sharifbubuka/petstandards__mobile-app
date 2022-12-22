import { FC, useState } from "react";
import { StyleSheet, useWindowDimensions, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BaseInput } from 'components/TextInput'
import { BaseButton } from "components/Button";
import { SubmitHandler, useForm } from "react-hook-form";

const ForgotPasswordScreen: FC = () => {

  const { height } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { control, handleSubmit } = useForm();

  const onSendCodePressed: SubmitHandler<any> = (data) => {
    navigation.navigate('ResetPassword');
  };


  const onSignInPressed = () => {
    navigation.navigate('Signin');
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root, { minHeight: height }]}>
          <Text style={[styles.title, { marginTop: height * 0.1, marginBottom: height * 0.05 }]}>Reset your password</Text>

          <BaseInput 
            placeholder="Enter your email address" 
            keyboardType="email-address"
            name="email"
            control={control}
            rules={{ required: 'Email address is required.' }} 
          />

          <BaseButton text="Send Confirmation Code" onPress={handleSubmit(onSendCodePressed)} />

          <BaseButton text="Back to sign in" onPress={onSignInPressed} type="Tertiary" fgColor="#FDB075" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ForgotPasswordScreen;

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