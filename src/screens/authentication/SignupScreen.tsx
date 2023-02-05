import { FC, useState } from "react";
import { StyleSheet, useWindowDimensions, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BaseInput } from 'components/TextInput'
import { BaseButton } from "components/Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { EMAIL_REGEX } from "utils/regex";
import { useAuth } from "context";
import { FormControlledInput } from "components/TextInput/Instances";
import { ICON_NAMES } from "components/Icon";
import { LoadableButton } from "components/Button/Instances";
import { AUTH_SCREEN_NAMES } from "constants/enums/screens";

const SignupScreen: FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [signupInProgress, setsignupInProgress] = useState<boolean>(false);

  const { height } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { control, handleSubmit, watch } = useForm();
  const password = watch('password1')

  const { signin,  signup } = useAuth();

  const onSignupPressed: SubmitHandler<any> = async ({ email, password1, password2, username }) => {
    setsignupInProgress(true);
    signup(email, password1);
    navigation.navigate('ConfirmEmail');
  };

  const onSigninPressed = () => {
    navigation.navigate(AUTH_SCREEN_NAMES.SIGN_IN);
  }

  return (
    <SafeAreaView style={[styles.root]}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <View style={[styles.header, { marginTop: height * 0.01 }]}>
            <Text style={styles.title}>Welcome to Pet Master{' '}👋</Text>
            <Text style={styles.sub_title}>The first pets care and management mobile app in Uganda. 
              Please create an account to access the goodies.
            </Text>
          </View>
          <View style={styles.form}>
            <FormControlledInput
              control={control}
              name='email'
              rules={{ 
                required: 'Email is required', 
                pattern: { value: EMAIL_REGEX, message: 'Email is invalid'} 
              }}
              inputProps={{
                placeholder: 'Email'
              }}
              styles={styles.input}
            />

            <FormControlledInput
              control={control}
              name='username'
              rules={{ 
                required: 'Username is required', 
                max: { value: 24, message: 'Username should be less than 24 characters' 
              }}} 
              inputProps={{
                placeholder: 'Username'
              }}
              styles={styles.input}
            />

            <FormControlledInput
              control={control}
              name='password1'
              rules={{ 
                required: 'Password is requried.',
                min: { value: 8, message: 'Password should be at least 8 characters' } 
              }}
              inputProps={{
                placeholder: 'Enter password',
                secureTextEntry: true
              }}
              styles={styles.input}
            />

            <FormControlledInput
              control={control}
              name='password2'
              icon={passwordVisible ? ICON_NAMES.OPEN_EYE : ICON_NAMES.CLOSED_EYE}
              iconColor='#757b6c'
              onIconPress={() => setPasswordVisible(!passwordVisible)}
              rules={{
                validate: (value: string) => value === password || 'Passwords do not match'
              }} 
              inputProps={{
                placeholder: 'Re-enter password',
                secureTextEntry: passwordVisible
              }}
              styles={styles.input}
            />

            <LoadableButton 
              styles={styles.submitBtn} 
              loading={signupInProgress} 
              onPress={handleSubmit(onSignupPressed)}
            >Create Account</LoadableButton>
          </View>
        </View>
        <Text style={styles.signIn}>
          Already have an account?
          <Text onPress={onSigninPressed} style={styles.signInLink}>{' '}Sign In</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignupScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 25,
    backgroundColor: '#f3faea'
  },
  container: {
    flex: 1,
    justifyContent: 'space-between'
  },
  header: {
    marginBottom: 40
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
  	color: '#051C68',
    width: '100%'
  },
  sub_title: {
    color: '#464a41'
  },
  form: {

  },
  input: {
    marginBottom: 10,
  },
  submitBtn: {
    marginTop: 10,
    marginBottom: 20
  },
  signIn: {
    color: '#464a41',
    textAlign: 'center'
  },
  signInLink: {
    fontWeight: '500'
  }
});