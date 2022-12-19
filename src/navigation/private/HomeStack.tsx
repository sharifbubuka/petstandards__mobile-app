import { FC } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from "screens/Home";
import { ServiceScreen, ServicesScreen, ServiceProviderScreen } from "screens/Home/services";

const Stack = createNativeStackNavigator();

const HomeStack: FC = () => {

  // const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ServicesAndProducts" component={HomeScreen} />
      {/* <Stack.Screen name="Services" component={ServicesScreen} /> */}
      <Stack.Screen name="Service" component={ServiceScreen} />
      <Stack.Screen name="ServiceProvider" component={ServiceProviderScreen} />
    </Stack.Navigator>
  )
}

export default HomeStack;