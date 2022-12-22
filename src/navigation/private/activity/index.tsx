import { FC } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivitiesAndRemindersScreen } from "screens/activity";
import { ACTIVITY_SCREEN_NAMES } from "constants/enums/screens";
import { ActivityScreen, CreateActivityScreen, UpdateActivityScreen } from "screens/activity/activities";
import { CreateReminderScreen, ReminderScreen, UpdateReminderScreen } from "screens/activity/reminders";


const Stack = createNativeStackNavigator();

const StartActivityScreen: FC = () => {

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name={ACTIVITY_SCREEN_NAMES.ACTIVITIES_AND_REMINDERS} component={ActivitiesAndRemindersScreen} />
      <Stack.Screen name={ACTIVITY_SCREEN_NAMES.ACTIVITY} component={ActivityScreen} />
      <Stack.Screen name={ACTIVITY_SCREEN_NAMES.CREATE_ACTIVITY} component={CreateActivityScreen} />
      <Stack.Screen name={ACTIVITY_SCREEN_NAMES.UPDATE_ACTIVITY} component={UpdateActivityScreen} />
      <Stack.Screen name={ACTIVITY_SCREEN_NAMES.REMINDER} component={ReminderScreen} />
      <Stack.Screen name={ACTIVITY_SCREEN_NAMES.CREATE_REMINDER} component={CreateReminderScreen} />
      <Stack.Screen name={ACTIVITY_SCREEN_NAMES.UPDATE_REMINDER} component={UpdateReminderScreen} />
    </Stack.Navigator>
  )
}

export default StartActivityScreen;