import { FC } from "react";
import { StyleSheet, useWindowDimensions, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BaseInput } from 'components/TextInput'
import { BaseButton } from "components/Button";
import SocialSignInButtons from "components/Button/SocialSignInButtons";
import { SubmitHandler, useForm } from "react-hook-form";
import { EMAIL_REGEX } from "utils/regex";
import { AuthService } from "services/authentication";
import { useAuth } from "context";

const SignupScreen: FC = () => {

  const { height } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { control, handleSubmit, watch } = useForm();
  const password = watch('password')

  const { signin, signinWithGoogle, getCurrentUser, signup } = useAuth();

  const onRegisterPressed: SubmitHandler<any> = async ({ email, password, username }) => {
    // const userCred = await AuthService.createUserWithEmailAndPassword({ email, password })
    // dispatchSignup({ email, password, username });
    signup(email, password);
    navigation.navigate('ConfirmEmail');
  };

  const onTermsOfUsePressed = () => {
    console.warn("Terms of Use Pressed");
    // navigation.navigate('TermsOfUse');
  };

  const onPrivacyPolicyPressed = () => {
    console.warn("Privacy Policy Pressed");
    // navigation.navigate('PrivacyPolicy');
  };

  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignInPressed = () => {
    navigation.navigate('Signin');
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.root, { minHeight: height }]}>
          <Text style={styles.title}>Create account</Text>
          {true ? <Text>Logged In</Text> : <Text>Logged Out</Text>}

          <BaseInput 
            placeholder="Email address"
            name="email"
            control={control}
            rules={{ required: 'Email is required', pattern: { value: EMAIL_REGEX, message: 'Email is invalid'} }} 
          />

          <BaseInput 
            placeholder="Username" 
            name="username"
            control={control}
            rules={{ 
              required: 'Username is required',
              max: { value: 24, message: 'Username should be less than 24 characters' }
            }} 
          />

          <BaseInput 
            placeholder="Password" 
            keyboardType="visible-password" 
            secureTextEntry={true}
            name="password"
            control={control}
            rules={{ 
              required: 'Password is requried.',
              min: { value: 8, message: 'Password should be at least 8 characters' } 
            }}
          />

          <BaseInput 
            placeholder="Repeat Password" 
            secureTextEntry={true}
            name="passwordRepeat"
            control={control}
            rules={{
              validate: (value: string) => value === password || 'Passwords do not match'
            }} 
          />

          <BaseButton text="Register" onPress={handleSubmit(onRegisterPressed)} />

          <Text style={styles.terms}>
            By registering, you confirm that you accept our<Text onPress={onTermsOfUsePressed} style={styles.link}>
            {' '}Terms of Use{' '}</Text>and<Text onPress={onPrivacyPolicyPressed} style={styles.link}>{' '}Privacy Policy</Text>.
          </Text>

          <BaseButton text="Forgot password?" onPress={onForgotPasswordPressed} type="Tertiary" />

          <SocialSignInButtons />

          <BaseButton text="Have an account? Sign in." onPress={onSignInPressed} type="Tertiary" />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignupScreen;

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
  terms: {
    color: 'gray',
    marginVertical: 10
  },
  link: {
    color: '#FDB075'
  }
});