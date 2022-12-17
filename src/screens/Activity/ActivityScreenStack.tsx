import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from "react-native-safe-area-context";
import { RemindersScreen } from "./reminders";
import { ActivitiesScreen } from "./activities";
import ActivitiesHomeScreen from "./ActivitiesHomeScreen";

const Stack = createNativeStackNavigator();

const StartActivityScreen: FC = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Activities" component={ActivitiesHomeScreen} />
      {/* <Stack.Screen name="Reminders" component={RemindersScreen} /> */}
    </Stack.Navigator>
  )
}

export default StartActivityScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'fff',
    marginTop: 15
  }
});