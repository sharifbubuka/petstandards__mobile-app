import { FC } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import UserAccountSettingsScreen from "./UserAccountSettingsScreen";

const Stack = createNativeStackNavigator();

const PetAccoutScreen: FC = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="StartSettingsScreen" component={UserAccountSettingsScreen} />
    </Stack.Navigator>
  )
}

export default PetAccoutScreen;