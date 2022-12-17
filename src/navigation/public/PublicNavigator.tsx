import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { SigninScreen } from 'screens/Auth/signin';
import { ForgotPasswordScreen, ResetPasswordScreen } from 'screens/Auth/forgotPassword';
import { SignupScreen, ConfirmEmailScreen } from 'screens/Auth/signup';

const Stack = createNativeStackNavigator();

const PublicNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false, contentStyle: { backgroundColor: 'F9FBFC' }
        }}>
          <Stack.Screen name="Signin" component={SigninScreen}/>
          <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen}/>
          <Stack.Screen name="ResetPassword" component={ResetPasswordScreen}/>
          <Stack.Screen name="Signup" component={SignupScreen}/>
          <Stack.Screen name="ConfirmEmail" component={ConfirmEmailScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default PublicNavigator;