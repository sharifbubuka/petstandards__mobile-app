import { MainLayout } from "components/PageLayout";
import { FC } from "react";
import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";

const SingleServiceScreen: FC  = () => {
  const { width } = useWindowDimensions();
  return (
    <MainLayout horizontalPadding={0}>
      <View style={styles.coverImageBox}>
        <Image style={styles.coverImage} source={{ uri: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/249960798/original/480fe455030289c8e5090dd9dcf0b3c2a3b49dad/write-high-quality-veterinary-articles-and-pet-blogs-86f5.jpg' }} />
      </View>
      <View style={[styles.content, { paddingHorizontal: width * 0.05 }]}>
        <View style={styles.profileBox}>
          <View style={styles.profileBoxLeft}>
            <View style={styles.avatarBox}>
              <Image style={styles.avatar} source={{ uri: 'https://media.gettyimages.com/id/578262619/photo/portrait-of-mature-doctor-with-stethoscope-holding-glasses-looking-at-camera-smiling.jpg?s=612x612&w=0&k=20&c=JcJuaPIvTgQ-Jv1_ee22VoLTxLFa5x5IMRhn4GGPkJA=' }} />
              <View style={styles.avatarStatus}></View>
            </View>
            <View style={styles.serviceProviderDetails}>
              <Text style={styles.serviceProviderName}>Cameron Williamson</Text>
              <Text style={styles.serviceProviderDescription}>Bachelor Veterinary Science</Text>
            </View>
          </View>
          <View style={styles.profileBoxRight}></View>
        </View>
      </View>
    </MainLayout>
  )
}

export default SingleServiceScreen;

const styles = StyleSheet.create({
  coverImageBox: {
    height: 300,
    width: '100%',
  },
  coverImage: {
    height: '100%',
    width: '100%'
  },
  content: {
    paddingVertical: 15
  },
  profileBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15
  },
  profileBoxLeft: {
    flexDirection: 'row',
  },
  avatarBox: {
    width: 40,
    height: 40,
    marginRight: 15,
    position: 'relative'
  },
  avatar: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  avatarStatus: {
    width: 13,
    height: 13,
    backgroundColor: '#90ee90',
    borderRadius: 100,
    position: 'absolute',
    right: 0,
    bottom: 1,
    borderWidth: 2,
    borderColor: 'white'
  },
  serviceProviderDetails: {
    justifyContent: 'center'
  },
  serviceProviderName: {
    fontSize: 14,
    fontWeight: '500'
  },
  serviceProviderDescription: {
    fontSize: 14
  },
  profileBoxRight: {
    
  },
});