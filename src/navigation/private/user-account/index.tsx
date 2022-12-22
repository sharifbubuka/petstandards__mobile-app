import { FC } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ACCOUNT_SCREEN_NAMES } from "constants/enums/screens";
import { 
  PaymentMethodsScreen, 
  PreferencesScreen, 
  SupportCenterScreen, 
  UpgradeToPremiumScreen, 
  UserProfileScreen, 
  UserSettingsScreen 
} from "screens/UserAccount";

const Stack = createNativeStackNavigator();

const UserAccoutStack: FC = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={ACCOUNT_SCREEN_NAMES.SETTINGS_SCREEN} component={UserSettingsScreen} />
      <Stack.Screen name={ACCOUNT_SCREEN_NAMES.USER_PROFILE} component={UserProfileScreen} />
      <Stack.Screen name={ACCOUNT_SCREEN_NAMES.PREFERENCES} component={PreferencesScreen} />
      <Stack.Screen name={ACCOUNT_SCREEN_NAMES.PAYMENT_METHODS} component={PaymentMethodsScreen} />
      <Stack.Screen name={ACCOUNT_SCREEN_NAMES.UPGRADE_TO_PREMIUM} component={UpgradeToPremiumScreen} />
      <Stack.Screen name={ACCOUNT_SCREEN_NAMES.SUPPORT_CENTER} component={SupportCenterScreen} />
    </Stack.Navigator>
  )
}

export default UserAccoutStack;