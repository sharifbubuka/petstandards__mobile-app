import { FC } from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import ServicesScreen from "screens/Home/services/ServicesScreen";
import ProductsScreen from "screens/Home/products/ProductsScreen";
import { useNavigation } from '@react-navigation/native';
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

const HomeScreenStack: FC = () => {

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ServicesAndProducts" component={HomeScreen} />
      {/* <Stack.Screen name="Products" component={ProductsScreen} /> */}
    </Stack.Navigator>
  )
}

export default HomeScreenStack;