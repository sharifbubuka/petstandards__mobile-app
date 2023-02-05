import { BaseButton } from "components/Button";
import { MainLayout } from "components/ScreenLayout";
import { FC } from "react";
import { Pressable, ScrollView, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BaseIcon, ICON_NAMES } from "components/Icon";
import { GradientButton } from "components/Button/Instances";
import { ACCOUNT_SCREEN_NAMES } from "constants/enums/screens";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const sections = [
  { label: 'Your profile', icon: ICON_NAMES.USER, path: ACCOUNT_SCREEN_NAMES.USER_PROFILE },
  { label: 'Preferences', icon: ICON_NAMES.PREFERENCES, path: ACCOUNT_SCREEN_NAMES.PREFERENCES },
  { label: 'Payment methods', icon: ICON_NAMES.PAYMENTS, path: ACCOUNT_SCREEN_NAMES.PAYMENT_METHODS },
  { label: 'Support', icon: ICON_NAMES.CONTACT_SUPPORT, path: ACCOUNT_SCREEN_NAMES.SUPPORT_CENTER },
]

const UserAccountSettingsScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Settings</Text>
        <GradientButton 
          styles={styles.premiumBtn} 
          gradient={{
            colors: ['#e6891f', '#e61f87'],
            start: { x: 0, y: 0 },
            end: { x: 1, y: 0 }
          }} 
          icon={ICON_NAMES.LOCK_OPEN} 
          onPress={() => navigation.navigate(ACCOUNT_SCREEN_NAMES.UPGRADE_TO_PREMIUM)}
        >Upgrade to Premium</GradientButton> 

        {sections.map((section, index) => (
          <Pressable style={styles.section} key={index} onPress={() => navigation.navigate(section.path)}>
            <BaseIcon name={section.icon} color='#2f312b' size={22}/>
            <Text style={styles.sectionLabel}>{section.label}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserAccountSettingsScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 25,
    paddingTop: 20,
    backgroundColor: '#f5fbee'
  },
  container: {},
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#051C68',
    marginBottom: 25
  },
  premiumBtn: {
    marginBottom: 30
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  sectionLabel: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: '500',
    color: '#2f312b'
  }
});