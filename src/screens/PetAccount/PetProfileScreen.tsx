import { FC } from "react";
import { Text, View, StyleSheet, Image, ScrollView, useWindowDimensions, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicon from 'react-native-vector-icons/Ionicons';

const PetProfileScreen: FC = () => {

  const { width } = useWindowDimensions();

  return (
      <ScrollView style={styles.container}>
        <Image style={[styles.avatar, { height: width }]} source={{ uri: 'https://images.pexels.com/photos/7483187/pexels-photo-7483187.jpeg?auto=compress&cs=tinysrgb&w=600' }} />
        <Text style={styles.id}>ID: A3848</Text>
        <View style={[styles.details, { marginTop: width }]}>
          <View style={[styles.profileCard, { marginHorizontal: 0.07 * width }]}>
            <View style={styles.NameAndGender}>
              <Text style={styles.name}>Armaggedon</Text>
              <Ionicon style={styles.genderIcon} size={20} name="male" />
            </View>
            <View style={styles.breeadAndAge}>
              <Text style={styles.breed}>Border collie</Text>
              <View style={styles.age}>
                <Ionicon name="time-outline" size={16} color="#5A5A5A" />
                <Text style={styles.ageText}>2.5 years old</Text>
              </View>
            </View>
            <View style={styles.location}>
              <Ionicon  name="location-outline" size={16} color="#5A5A5A" />
              <Text style={styles.locationText}>Kireka, Kampala</Text>
            </View>
          </View>
          <View>
            <Text>Hello</Text>
          </View>
        </View>
      </ScrollView>
  )
}

export default PetProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  id: {
    position: 'absolute',
    backgroundColor: '#3B71F3',
    color: 'white',
    paddingHorizontal: 10,
    paddingVertical: 3,
    fontSize: 12,
    fontWeight: '500',
    borderRadius: 2,
    marginTop: 20,
    marginLeft: 15,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24
  },
  avatar: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0
  },
  details: {
    backgroundColor: '#f2f4f5',
    height: 600,
  },
  profileCard: {
    backgroundColor: 'white',
    padding: 15,
    paddingHorizontal: 20,
    marginTop: -55,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24
  },
  NameAndGender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5
  },
  name: {
    fontSize: 18,
    fontWeight: '600'
  },
  genderIcon: {
    paddingTop: 5
  },
  breeadAndAge: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },
  breed: {
    fontSize: 15,
    fontWeight: '500',
    color: '#5A5A5A'
  },
  age: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  ageText: {
    marginLeft: 4,
    color: '#5A5A5A',
    fontWeight: '500'
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationText: {
    fontSize: 14,
    color: '#5A5A5A',
    marginLeft: 4
  }
});