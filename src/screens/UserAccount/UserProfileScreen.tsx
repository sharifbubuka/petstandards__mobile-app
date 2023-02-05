import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { BaseAvatar } from 'components/Avatar';
import { BaseIcon, ICON_NAMES } from 'components/Icon';
import { ACCOUNT_SCREEN_NAMES } from 'constants/enums/screens';
import { FC } from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserProfileScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const { height } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Pressable style={styles.backBtnBox} onPress={() => navigation.navigate(ACCOUNT_SCREEN_NAMES.SETTINGS_SCREEN)}>
            <BaseIcon name={ICON_NAMES.BACK_ARROW} size={25} color='white' />
          </Pressable>
          <BaseIcon name={ICON_NAMES.ELLIPSIS} size={30} color='#051C68' />
        </View>
        <View style={[styles.avatarBox, { marginTop: height * 0.05 }]}>
          <BaseAvatar
            size={120}
            style={styles.avatar}
            imageSource='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600' 
          />
          <Text style={styles.userName}>Bubuka Sharif</Text>
          <Text style={styles.userEmail}>sharifbubuka256@gmail.com</Text>
        </View>
        <View style={styles.profileDetails}>
          <Text>Hello</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default UserProfileScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#f3faea'
  },
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
    paddingHorizontal: 25,
    alignItems: 'center',
    position: 'relative',
  },
  backBtnBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#051C68',
    height: 35,
    width: 35,
    padding: 5,
    borderRadius: 5
  },
  avatarBox: {
    alignItems: 'center'
  },
  avatar: {
    marginBottom: 10
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2f312b'
  },
  userEmail: {
    color: '#2f312b'
  },
  profileDetails: {
    backgroundColor: 'white',
    height: 800,
    marginTop: 40,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  }
});