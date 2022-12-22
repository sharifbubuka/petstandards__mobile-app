
import { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ONBOARDING_SCREEN_NAMES } from 'constants/enums/screens';
import { 
  FirstPetOnboardingScreen, 
  UserOnboardingScreen, 
  WelcomeScreen 
} from 'screens/onboarding';

const Stack = createNativeStackNavigator();

const UserOnboardingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ONBOARDING_SCREEN_NAMES.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={ONBOARDING_SCREEN_NAMES.USER_ONBOARDING} component={UserOnboardingScreen} />
      <Stack.Screen name={ONBOARDING_SCREEN_NAMES.FIRST_PET_ONBOARDING} component={FirstPetOnboardingScreen} />
    </Stack.Navigator>
  )
}

export default UserOnboardingStack;