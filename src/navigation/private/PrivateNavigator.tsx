import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { HomeScreen } from 'screens/Home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActivityScreen from 'screens/Activity/ActivityScreenStack';
import { StartPetAccountScreen } from 'screens/PetAccount';
import Ionicicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StartUserAccountScreen } from 'screens/UserAccount';

const Tab = createBottomTabNavigator();

const PrivateNavigator = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName='Home'
          backBehavior='history'
          screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName = '';
                let routeName = route.name;
                if (routeName === 'Marketplace') {
                  iconName = 'home-variant';
                  return<MaterialIcon style={{  }} name={iconName} size={27} color={focused ? 'black' : color} />
                } else if (routeName === 'Activity') {
                  iconName = 'paw-sharp';
                  return <Ionicicons style={{  }} name={iconName} size={25} color={focused ? 'black' : color} />
                } else if (routeName === 'Profile') {
                  iconName = 'dog';
                  return <MaterialIcon style={{ marginTop: 4 }} name={iconName} size={30} color={focused ? 'black' : color} />
                } else if (routeName === 'You') {
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
          <Tab.Screen name="Marketplace" component={HomeScreen} />
          
          <Tab.Screen name="Activity" component={ActivityScreen} />

          <Tab.Screen name="Profile" component={StartPetAccountScreen} />

          <Tab.Screen name="You" component={StartUserAccountScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}

export default PrivateNavigator;