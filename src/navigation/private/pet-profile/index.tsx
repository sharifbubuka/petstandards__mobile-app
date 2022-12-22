import { FC } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { PET_ROFILE_SCREEN_NAMES } from "constants/enums/screens";
import { CreatePetProfileScreen, PetFinancesScreen, PetHealthScreen, PetprofileScreen, UpdatePetProfileScreen } from "screens/PetAccount";

const Stack = createNativeStackNavigator();

const PetProfileStack: FC = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={PET_ROFILE_SCREEN_NAMES.PET_PROFILE} component={PetprofileScreen} />
      <Stack.Screen name={PET_ROFILE_SCREEN_NAMES.CREATE_PET} component={CreatePetProfileScreen} />
      <Stack.Screen name={PET_ROFILE_SCREEN_NAMES.UPDATE_PET_PROFILE} component={UpdatePetProfileScreen} />
      <Stack.Screen name={PET_ROFILE_SCREEN_NAMES.PET_PROFILE_FINANCES} component={PetFinancesScreen} />
      <Stack.Screen name={PET_ROFILE_SCREEN_NAMES.PET_PROFILE_HEALTH} component={PetHealthScreen} />
    </Stack.Navigator>
  )
}

export default PetProfileStack;
