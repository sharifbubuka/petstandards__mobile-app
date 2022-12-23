import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivityScreen from 'navigation/private/activity';
import Ionicicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeStack from './home';
import { PRIVATE_SCREEN_NAMES } from 'constants/enums/screens';
import PetProfileStack from './pet-profile';
import UserAccoutStack from './user-account';
import { SheetProvider } from "react-native-actions-sheet";
import Toast from 'react-native-toast-message';
import 'components/BottomActionSheet';
import { ToastConfig } from 'components/Toast';

const Tab = createBottomTabNavigator();

const PrivateNavigator = () => {
  return (
    <SafeAreaProvider>
      <SheetProvider>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName={PRIVATE_SCREEN_NAMES.MARKETPLACE}
            backBehavior='history'
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName = '';
                  let routeName = route.name;
                  if (routeName === PRIVATE_SCREEN_NAMES.MARKETPLACE) {
                    iconName = 'home-variant';
                    return<MaterialIcon style={{  }} name={iconName} size={27} color={focused ? 'black' : color} />
                  } else if (routeName === PRIVATE_SCREEN_NAMES.ACTIVITY) {
                    iconName = 'paw-sharp';
                    return <Ionicicons style={{  }} name={iconName} size={25} color={focused ? 'black' : color} />
                  } else if (routeName === PRIVATE_SCREEN_NAMES.PROFILE) {
                    iconName = 'dog';
                    return <MaterialIcon style={{ marginTop: 4 }} name={iconName} size={30} color={focused ? 'black' : color} />
                  } else if (routeName === PRIVATE_SCREEN_NAMES.ACCOUNT) {
                    iconName = 'person-sharp';
                    return <Ionicicons style={{ }} name={iconName} size={25} color={focused ? 'black' : color} />
                  }
                }, 
                tabBarStyle: {
                    height: 50
                },
                headerShown: true,
                tabBarShowLabel: false,
            })}
          >
            <Tab.Screen name={PRIVATE_SCREEN_NAMES.MARKETPLACE} component={HomeStack} />
            
            <Tab.Screen name={PRIVATE_SCREEN_NAMES.ACTIVITY} component={ActivityScreen} />

            <Tab.Screen name={PRIVATE_SCREEN_NAMES.PROFILE} component={PetProfileStack} />

            <Tab.Screen name={PRIVATE_SCREEN_NAMES.ACCOUNT} component={UserAccoutStack} />
          </Tab.Navigator>
          <Toast position='top' visibilityTime={6000} topOffset={50} config={ToastConfig} />
        </NavigationContainer>
      </SheetProvider>
    </SafeAreaProvider>
  )
}

export default PrivateNavigator;