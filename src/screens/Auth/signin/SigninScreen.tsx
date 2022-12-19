import { FC, useState } from "react";
import { StyleSheet, Image, useWindowDimensions, ScrollView, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { BaseInput } from 'components/Inputs'
import { BaseButton } from "components/Buttons"
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SocialSignInButtons from "components/Buttons/SocialSignInButtons";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "context";

const SigninScreen: FC = () => {

  const { height } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { control, handleSubmit } = useForm();
  const { signin } = useAuth();

  const onSigninPressed: SubmitHandler<any> = ({ email, password }) => {
    // console.log(data);
    signin(email, password)
    
    // validate user
    // set redux state
    //navigation.navigate('Home');
  };
  
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignupPressed = () => {
    navigation.navigate('Signup')
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root, { minHeight: height }]}>
          <Image source={require("../../../../assets/images/Logo.png")} style={[styles.logo, { height: height * 0.29 }]} resizeMode="contain" />

          <BaseInput 
            name="email" 
            placeholder="Email address" 
            control={control}
            rules={{ required: 'Email is required' }} 
          />
          <BaseInput 
            name="password" 
            placeholder="Password" 
            control={control} 
            rules={{ required: 'Password is required', minLength: { value: 3, message: 'Password should be at least 8 characters' } }} 
            secureTextEntry={true} 
          />

          <BaseButton text="Sign in" onPress={handleSubmit(onSigninPressed)} />

          <BaseButton text="Forgot password?" onPress={onForgotPasswordPressed} type="Tertiary" />

          <SocialSignInButtons />

          <BaseButton text="Don't have an account? Sign up." onPress={onSignupPressed} type="Tertiary" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SigninScreen;

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: '80%',
    maxWidth: 500,
    height: 100
  }
});