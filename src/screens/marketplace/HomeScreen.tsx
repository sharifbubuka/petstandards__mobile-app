import { FC } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BaseIcon, ICON_NAMES } from "components/Icon";
import { ACCOUNT_SCREEN_NAMES } from "constants/enums/screens";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const HomeScreen: FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  
  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.title}>Marketplace</Text>
          </View>
          <View style={styles.headerRight}>
            <BaseIcon name={ICON_NAMES.ELLIPSIS} size={30} color='#051C68' />
          </View>
        </View>
        <View style={styles.greetingsBox}>
          <Text style={styles.greeting}>Hi, Sharif 👋</Text>
          <Text style={styles.request}>What can we get Pixel today?</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 25,
    paddingTop: 20,
    backgroundColor: '#f5fbee'
  },
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15
  },
  headerLeft: {},
  headerRight: {},
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#051C68',
  },
  greetingsBox: {

  },
  greeting: {
    fontSize: 20,
    marginBottom: 5,
    // fontWeight: 'bold',
    // color: '#051C68',
  },
  request: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#051C68',
  }

  
});