import { FC } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import PetProfileScreen from "./PetProfileScreen";
import PetHealthRecordsScreen from "./HealthRecordsScreen";
import PetFinancialRecordsScreen from "./FinancialRecordsScreen";

const Stack = createNativeStackNavigator();

const PetAccoutScreen: FC = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="PetProfile" component={PetProfileScreen} />
      <Stack.Screen name="PetHealthRecords" component={PetHealthRecordsScreen} />
      <Stack.Screen name="PetFinancialRecords" component={PetFinancialRecordsScreen} />
    </Stack.Navigator>
  )
}

export default PetAccoutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'fff',
    marginTop: 15
  }
});