import { FC, useState } from "react";
import { StyleSheet, Image, useWindowDimensions, ScrollView, View, Text } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { BaseInput } from 'components/TextInput'
import { BaseButton } from "components/Button"
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "context";
import { FormControlledInput } from "components/TextInput/Instances";
import { EMAIL_REGEX } from "utils/regex";
import { ICON_NAMES } from "components/Icon";
import { LoadableButton } from "components/Button/Instances";
import { BaseCheckBox } from "components/CheckBox";
import { AUTH_SCREEN_NAMES } from "constants/enums/screens";

const SigninScreen: FC = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [signinInProgress, setSigninInProgress] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const { height } = useWindowDimensions();
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const { control, handleSubmit } = useForm();
  const { signin } = useAuth();

  const onSigninPressed: SubmitHandler<any> = ({ email, password }) => {
    setSigninInProgress(true);
    signin(email, password)
  };

  const onRememberMePressed = () => setRememberMe(!rememberMe);
  
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const onSignupPressed = () => {
    navigation.navigate(AUTH_SCREEN_NAMES.SIGN_UP);
  };

  return (
    <SafeAreaView style={[styles.root]}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View>
          <View style={[styles.header, { marginTop: height * 0.01 }]}>
            <Text style={styles.title}>Welcome back{' '}👋</Text>
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
              name='password'
              icon={passwordVisible ? ICON_NAMES.OPEN_EYE : ICON_NAMES.CLOSED_EYE}
              iconColor='#757b6c'
              onIconPress={() => setPasswordVisible(!passwordVisible)}
              rules={{ 
                required: 'Password is requried.',
                min: { value: 8, message: 'Password should be at least 8 characters' } 
              }}
              inputProps={{
                placeholder: 'Password',
                secureTextEntry: passwordVisible
              }}
              styles={styles.input}
            />

            <View style={styles.formRow}>
              <BaseCheckBox 
                checked={rememberMe}
                onPress={onRememberMePressed}
                fillColor='#051C68'
                style={styles.rememberMe}
                textComponent={<Text style={styles.rememberMeText}>Remember me</Text>} 
              />
              <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </View>

            <LoadableButton 
              styles={styles.submitBtn} 
              loading={signinInProgress} 
              onPress={handleSubmit(onSigninPressed)}
            >Sign in</LoadableButton>
          </View>
        </View>
        <Text style={styles.signUp}>
          You dont't have an account?
          <Text onPress={onSignupPressed} style={styles.signUpLink}>{' '}Sign Up</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SigninScreen;

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
  form: {

  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  forgotPassword: {
    color: '#464a41',
    textDecorationLine: 'underline',
  },
  input: {
    marginBottom: 10,
  },
  rememberMe: {
    marginBottom: 10,
  },
  rememberMeText: {
    marginLeft: 10,
    color: '#464a41',
  },
  submitBtn: {
    marginTop: 10,
    marginBottom: 20
  },
  signUp: {
    color: '#464a41',
    textAlign: 'center'
  },
  signUpLink: {
    fontWeight: '500'
  }
});