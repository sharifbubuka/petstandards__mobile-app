import { BaseButton } from "components/Button";
import { MainLayout } from "components/ScreenLayout";
import { ServicesSlider } from "components/Carousel";
import { StaticStarRate } from "components/RatingStar";
import { SERVICES } from "constants/enums";
import { FC } from "react";
import { Image, Pressable, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import EntypoIcon from 'react-native-vector-icons/Entypo';

const SingleServiceScreen: FC  = () => {
  const { width } = useWindowDimensions();

  const perks = [
    { label: 'Office service', availability: true },
    { label: '4 feedback days', availability: true },
    { label: 'Free express transport', availability: true },
    { label: 'Home service', availability: false },
    { label: 'Money back guarrantee', availability: false },
  ];

  const specificRatings = [
    { label: 'Service as described', rating: '4.8' },
    { label: 'Customer care', rating: '4.0' },
    { label: 'Would recommend', rating: '5.0' },
    { label: 'Professionalism', rating: '4.5' },
  ]

  return (
    <MainLayout horizontalPadding={0}>
      <View style={styles.coverImageBox}>
        <Image style={styles.coverImage} source={{ uri: 'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/249960798/original/480fe455030289c8e5090dd9dcf0b3c2a3b49dad/write-high-quality-veterinary-articles-and-pet-blogs-86f5.jpg' }} />
      </View>
      <View style={[styles.content, { paddingHorizontal: width * 0.05 }]}>
        <View style={styles.businessProfileBox}>
          <Text style={styles.businessName}>The Country Vet</Text>
          <Text style={styles.businessDescription}>
            We are the leading veterinary services provider in Uganda sine 2010. We bring the international standards in our local practice. 
            We were awarded as the most innovative vet shop award by Pet Standards. 
            <Text onPress={() => console.log('clicked')} style={{ color: '#3B71F3' }}>{' '}More...</Text>
          </Text>
        </View>
        <View style={styles.profileBox}>
          <View style={styles.profileBoxLeft}>
            <View style={styles.avatarBox}>
              <Image style={styles.avatar} source={{ uri: 'https://media.gettyimages.com/id/578262619/photo/portrait-of-mature-doctor-with-stethoscope-holding-glasses-looking-at-camera-smiling.jpg?s=612x612&w=0&k=20&c=JcJuaPIvTgQ-Jv1_ee22VoLTxLFa5x5IMRhn4GGPkJA=' }} />
              <View style={styles.avatarStatus}></View>
            </View>
            <View style={styles.serviceProviderDetails}>
              <Text style={styles.serviceProviderName}>Dr. Cameron Williamson</Text>
              <Text style={styles.serviceProviderDescription}>Bachelor Veterinary Science</Text>
            </View>
          </View>
          <Pressable onPress={() => console.log('clicked')} style={styles.profileBoxRight}>
            <EntypoIcon name="chevron-down" size={30} color="gray" />
          </Pressable>
        </View>
        <View style={styles.activeServiceBox}>
          <Text style={styles.activeServiceTitle}>Dog Immunization</Text>
          <View style={styles.activeServicePerksBox}>
            {perks.map((perk, index) => (
              <View key={index} style={styles.activeServicePerk}>
                <Text style={styles.activeServicePerkText}>{perk.label}</Text>
                {perk.availability ? <EntypoIcon name="check" color={'green'} size={20} />
                 : <EntypoIcon name="cross" color={'red'} size={20} />}
              </View>
            ))}
          </View>
          <BaseButton
            text='Continue (75,000 UGX)'
            rounded={5}
            onPress={() => console.log('clicked')}
          />
          <View style={styles.serviceUserFeedback}>
            <View style={styles.serviceRating}>
              <StaticStarRate size="extra-large" rating={3.5} />
              <Text style={styles.serviceRatingText}>3.5</Text>
            </View>
          </View>
          <View style={styles.serviceQualityRatings}>
            {specificRatings.map((rating, index) => (
              <View style={styles.serviceQualityRating} key={index}>
                <Text style={styles.serviceQualityRatingLabel}>{rating.label}</Text>
                <View style={styles.serviceQualityRatingRightBox}>
                  <StaticStarRate rating={1} size="large" />
                  <Text style={styles.serviceQualityRatingText}>{rating.rating}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        {/* <ServicesSlider title='Other Services' serviceType={SERVICES.VETERINARY} /> */}
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
  businessProfileBox: {
    // backgroundColor: 'red'
  },
  businessName: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 15
  },
  businessDescription: {
  },
  profileBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 25
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
    bottom: -1,
    borderWidth: 2,
    borderColor: 'white'
  },
  serviceProviderDetails: {
    justifyContent: 'center'
  },
  serviceProviderName: {
    fontSize: 16,
    fontWeight: '500'
  },
  serviceProviderDescription: {
    fontSize: 14
  },
  profileBoxRight: {
    
  },
  activeServiceBox: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
	  width: 0,
	  height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24
  },
  activeServiceTitle: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
  },
  activeServicePerksBox: {
    marginBottom: 10
  },
  activeServicePerk: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    paddingVertical: 10
  },
  activeServicePerkText: {
    fontSize: 14
  },
  activeServiceIcon: {
    
  },
  serviceUserFeedback: {
    marginVertical: 15,
    paddingTop: 0
  },
  serviceRating: {
    flexDirection: 'row'
  },
  serviceRatingText: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: '700'
  },
  serviceQualityRatings: {
    
  },
  serviceQualityRating: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center'
  },
  serviceQualityRatingLabel: {
    fontSize: 16,
  },
  serviceQualityRatingRightBox: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  serviceQualityRatingText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: '500',
    paddingVertical: 5
  },
});