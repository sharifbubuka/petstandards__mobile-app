import { BaseButton } from "components/Buttons";
import { MainLayout } from "components/PageLayout";
import { FC } from "react";
import { ScrollView, StyleSheet, Text, TouchableHighlight, useWindowDimensions, View } from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcon from 'react-native-vector-icons/Ionicons';

const screens = [
  { buttonLable: 'Personal Profile', to: '', iconLibrary: 'IonIcon', iconName: 'person-sharp' },
  { buttonLable: 'Pets Management', to: '', iconLibrary: 'MaterialCommunityIcon', iconName: 'dog' },
  { buttonLable: 'Payment Methods', to: '', iconLibrary: 'MaterialCommunityIcon', iconName: 'wallet-outline' },
  { buttonLable: 'Customer Support', to: '', iconLibrary: 'MaterialCommunityIcon', iconName: 'dog' },
  { buttonLable: 'Policies', to: '', iconLibrary: 'MaterialCommunityIcon', iconName: 'dog' },
]

const UserAccountSettingsScreen: FC = () => {
  const { height } = useWindowDimensions();
  
  return (
    <MainLayout>
      <View style={[styles.screen]}>
        <View>
          <Text style={styles.title}>Manage Settings</Text>
          <View style={styles.settingsGroup}>
            {screens.map((screen, index) => (
              <TouchableHighlight key={index} onPress={() => console.log('setting row clicked')}>
                <View style={styles.settingRow}>
                  { screen.iconLibrary === 'IonIcon' ?
                  <IonIcon style={styles.icon} name={screen.iconName} size={25} /> :
                  <MaterialCommunityIcon style={styles.icon} name={screen.iconName} size={30} />}
                  <Text style={styles.rowText}>{screen.buttonLable}</Text>
                </View>
              </TouchableHighlight>
            ))}
          </View>
        </View>
        <View style={styles.premiumButton}>
          <BaseButton text="UPGRADE TO PREMIUM" onPress={() => console.log('clicked upgrade to premium')} />
        </View>
        <View>
          
        </View>
      </View>
    </MainLayout>
  )
}

export default UserAccountSettingsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between'
  },
  title: {
    marginVertical: 15,
    fontSize: 22
  },
  settingsGroup: {
    flex: 1,
    marginBottom: 10
  },
  settingRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 5
  },
  icon: {
    marginRight: 15
  },
  rowText: {
    fontSize: 18
  },
  premiumButton: {
    
  }
});