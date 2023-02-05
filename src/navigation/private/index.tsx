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
import { FC } from 'react';
import { Pressable } from 'react-native';
import { Text } from 'react-native-svg';
import { BaseIcon, ICON_NAMES } from 'components/Icon';

const TabBarButton: FC = () => {
  return (
    <Pressable>
      <Text>ME</Text>
    </Pressable>
  )
}

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
                tabBarIcon: ({ focused, color, size  }) => {
                  let routeName = route.name;
                  if (routeName === PRIVATE_SCREEN_NAMES.MARKETPLACE) {
                    return<BaseIcon name={ICON_NAMES.HOME} size={30} color={focused ? '#051C68' : color} />
                  } else if (routeName === PRIVATE_SCREEN_NAMES.ACTIVITY) {
                    return <BaseIcon name={ICON_NAMES.DOG_PAW} size={30} color={focused ? '#051C68' : color} />
                  } else if (routeName === PRIVATE_SCREEN_NAMES.PROFILE) {
                    return <BaseIcon name={ICON_NAMES.DOG} size={30} color={focused ? '#051C68' : color} />
                  } else if (routeName === PRIVATE_SCREEN_NAMES.ACCOUNT) {
                    return <BaseIcon name={ICON_NAMES.USER} size={30} color={focused ? '#051C68' : color} />
                  }
                }, 
                tabBarStyle: {
                    height: 50
                },
                headerShown: false,
                tabBarShowLabel: false,
            })}
          >
            <Tab.Screen 
              name={PRIVATE_SCREEN_NAMES.MARKETPLACE} 
              component={HomeStack}
            />
            
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