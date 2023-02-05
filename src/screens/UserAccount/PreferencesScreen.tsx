import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BaseIcon, ICON_NAMES } from 'components/Icon';
import { BaseSwitch } from 'components/Switch';
import { ACCOUNT_SCREEN_NAMES } from 'constants/enums/screens';
import { useTheme } from 'context/theme';
import { FC } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PreferencesScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Pressable style={styles.backBtnBox} onPress={() => navigation.navigate(ACCOUNT_SCREEN_NAMES.SETTINGS_SCREEN)}>
          <BaseIcon name={ICON_NAMES.BACK_ARROW} size={25} color='white' />
        </Pressable>
        <View style={styles.preferencesBox}>
          <View style={styles.preferencesGroup}>
            <Text style={styles.preferencesGroupTitle}>Display</Text>
            <View style={styles.preferencesInGroup}>
              <View style={styles.preferencesSubGroup}>
                <View style={styles.preferencesSubGroupLeft}>
                  <Text style={styles.preferenceLabel}>Enable dark mode</Text>
                </View>
                <View style={styles.preferencesSubGroupRight}>
                  <BaseSwitch 
                    value={currentTheme === 'light' ? false : true} 
                    onValueChange={(value) => toggleTheme()} />
                </View>
              </View>
              <View style={styles.preferencesSubGroup}>
                <View style={styles.preferencesSubGroupLeft}>
                  <Text style={styles.preferenceLabel}>Enable dark mode</Text>
                </View>
                <View style={styles.preferencesSubGroupRight}>
                  <BaseSwitch value={currentTheme === 'light' ? false : true} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.preferencesGroup}>
            <Text style={styles.preferencesGroupTitle}>Authentication</Text>
            <View style={styles.preferencesInGroup}>
              <View style={styles.preferencesSubGroup}>
                <View style={styles.preferencesSubGroupLeft}>
                  <Text style={styles.preferenceLabel}>Remember me</Text>
                </View>
                <View style={styles.preferencesSubGroupRight}>
                  <BaseSwitch value={false} />
                </View>
              </View>
              <View style={styles.preferencesSubGroup}>
                <View style={styles.preferencesSubGroupLeft}>
                  <Text style={styles.preferenceLabel}>Enable dark mode</Text>
                </View>
                <View style={styles.preferencesSubGroupRight}>
                  <BaseSwitch value={false} />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.preferencesGroup}>
            <Text style={styles.preferencesGroupTitle}>Notifications</Text>
            <View style={styles.preferencesInGroup}>
              <View style={styles.preferencesSubGroup}>
                <View style={styles.preferencesSubGroupLeft}>
                  <Text style={styles.preferenceLabel}>Email notifications</Text>
                </View>
                <View style={styles.preferencesSubGroupRight}>
                  <BaseSwitch value={false} />
                </View>
              </View>
              <View style={styles.preferencesSubGroup}>
                <View style={styles.preferencesSubGroupLeft}>
                  <Text style={styles.preferenceLabel}>Enable dark mode</Text>
                </View>
                <View style={styles.preferencesSubGroupRight}>
                  <BaseSwitch value={false} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PreferencesScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f3faea'
  },
  container: {},
  header: {
    flexDirection: 'row'
  },
  backBtnBox: {
    marginLeft: 25,
    marginTop: 25,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#051C68',
    height: 35,
    width: 35,
    padding: 5,
    borderRadius: 5
  },
  preferencesBox: {
    padding: 25,
    
  },
  preferencesGroup: {
    marginBottom: 25
  },
  preferencesGroupTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2f312b',
    marginBottom: 15
  },
  preferencesInGroup: {
    backgroundColor: 'white',
    borderRadius: 10,
  },
  preferencesSubGroup: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  preferencesSubGroupLeft: {

  },
  preferenceLabel: {
    fontSize: 15,
    color: '#2f312b',
  },
  preferencesSubGroupRight: {

  }
});