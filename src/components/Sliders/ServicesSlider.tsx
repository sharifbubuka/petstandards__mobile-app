import { StaticStarRate } from "components/StarRating";
import { FC } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons';

type Service = {
  serviceId: string
}

type Props = {
  title: string
  services: Service[]
}

const ServicesSlider: FC<Props> = ({ services, title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{ title }</Text>
        <Text style={styles.cta}>View all</Text>
      </View>
      <FlatList
        style={styles.slider}
        keyExtractor={service => service.serviceId}
        horizontal
        snapToInterval={300 + 20}
        data={services}
        ListEmptyComponent={() => (
          <View>
            <Text>Nearby Veterinary</Text>
          </View>
        )}
        renderItem={({ item, index }) => (
          <View style={[styles.card, index === services.length - 1 && { marginRight: 55 }]} key={index}>
            <View style={styles.cardTop}>
              <View style={styles.cardTopLeft}>
              <Image style={styles.avatar} source={{ uri: 'https://media.gettyimages.com/id/578262619/photo/portrait-of-mature-doctor-with-stethoscope-holding-glasses-looking-at-camera-smiling.jpg?s=612x612&w=0&k=20&c=JcJuaPIvTgQ-Jv1_ee22VoLTxLFa5x5IMRhn4GGPkJA=' }} />
              </View>
              <View style={styles.cardTopRight}>
                <Text style={styles.name}>Dr. Cameroon Williamson</Text>
                <Text style={styles.qualification}>BacheVeterinary Science</Text>
                <View style={styles.ratingBox}>
                  <StaticStarRate size="small" rating={4.5} />
                  <Text style={styles.ratingText}>4.0 (125 Reviews)</Text>
                </View>
              </View>
            </View>
            <View style={styles.cardMiddle}>
              <Text style={styles.experienceText}>
                <Text style={styles.experienceTextHighlight}>10{' '}</Text>
                years of experience
              </Text>
              <View style={styles.middleRight}>
                <View style={styles.locationIconBg}>
                  <Ionicon name="location-outline" size={16} color="#5A5A5A" />
                </View>
                <Text style={styles.proximityText}>1.5 km</Text>
              </View>
            </View>
            <View style={styles.cardBottom}>
              <Ionicon name="time-outline" size={16} color="#5A5A5A" />
              <Text style={styles.availabilityTime}>Monday - Friday at 8:00 AM - 6:00 PM</Text>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 15
  },
  cta: {
    fontSize: 14,
    color: '#5A5A5A',
  },
  slider: { 
    overflow: 'hidden'
  },
  card: {
    marginRight: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    width: 300,
  },
  cardTop: {
    flexDirection: 'row',
    marginBottom: 13
  },
  cardTopLeft: {
    height: 62,
    width: 55,
    marginRight: 15,
    borderRadius: 5,
    overflow: 'hidden'
  },
  avatar: {
    width: '100%',
    height: '100%'
  },
  cardTopRight: {},
  name: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5
  },
  qualification: {
    fontSize: 13,
    fontWeight: '500',
    color: '#5A5A5A',
    marginBottom: 3
  },
  ratingBox: {
    flexDirection: 'row'
  },
  ratingText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#5A5A5A',
    marginLeft: 7
  },
  cardMiddle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#5A5A5A',
    borderBottomWidth: 0.19,
    paddingBottom: 10
  },
  experienceText: {
    fontSize: 14,
    color: '#5A5A5A',
  },
  experienceTextHighlight: {
    fontWeight: '700'
  },
  middleRight: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationIconBg: {

  },
  proximityText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#5A5A5A',
  },
  cardBottom: {
    flexDirection: 'row',
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  availabilityTime: {
    fontSize: 12,
    fontWeight: '500',
    color: '#5A5A5A',
    marginLeft: 5
  }
})

export default ServicesSlider;