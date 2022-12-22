import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AUTH_SCREEN_NAMES } from 'constants/enums/screens';
import { 
  PasswordResetSuccessScreen, 
  RequestPasswordResetScreen, 
  SigninScreen, SignupScreen, 
  VerifyEmailAddressScreen 
} from 'screens/authentication';

const Stack = createNativeStackNavigator();

const PublicNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false, contentStyle: { backgroundColor: 'F9FBFC' }
        }}>
          <Stack.Screen name={AUTH_SCREEN_NAMES.SIGN_IN} component={SigninScreen}/>
          <Stack.Screen name={AUTH_SCREEN_NAMES.REQUEST_PASSWORD_RESET} component={RequestPasswordResetScreen}/>
          <Stack.Screen name={AUTH_SCREEN_NAMES.PASSWORD_RESET_SUCCESSFUL} component={PasswordResetSuccessScreen}/>
          <Stack.Screen name={AUTH_SCREEN_NAMES.SIGN_UP} component={SignupScreen}/>
          <Stack.Screen name={AUTH_SCREEN_NAMES.VERIFY_EMAIL_ADDRESS} component={VerifyEmailAddressScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default PublicNavigator