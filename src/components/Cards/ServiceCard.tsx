import { useNavigation } from "@react-navigation/native";
import { StaticStarRate } from "components/StarRating";
import { SERVICES } from "constants/enums";
import { VeterinaryService } from "constants/types";
import { NavigationContext } from "context";
import { FC, useContext } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons';

type Props = {
  serviceType: SERVICES,
  onPress: (data: any) => void,
  service: any
}

const ServiceCard: FC<Props> = ({ serviceType, service, onPress }) => {
  const navigation = useContext(NavigationContext);

  if (serviceType === SERVICES.VETERINARY) return (
    <Pressable style={vetStyles.card} onPress={onPress}>
      <View style={vetStyles.cardTop}>
        <View style={vetStyles.cardTopLeft}>
          <Image style={vetStyles.avatar} source={{ uri: 'https://media.gettyimages.com/id/578262619/photo/portrait-of-mature-doctor-with-stethoscope-holding-glasses-looking-at-camera-smiling.jpg?s=612x612&w=0&k=20&c=JcJuaPIvTgQ-Jv1_ee22VoLTxLFa5x5IMRhn4GGPkJA=' }} />
        </View>
        <View style={vetStyles.cardTopRight}>
          <Text style={vetStyles.name}>Dr. Cameroon Williamson</Text>
          <Text style={vetStyles.qualification}>BacheVeterinary Science</Text>
          <View style={vetStyles.ratingBox}>
            <StaticStarRate size="small" rating={4.5} />
            <Text style={vetStyles.ratingText}>4.0 (125 Reviews)</Text>
          </View>
        </View>
      </View>

      <View style={vetStyles.cardMiddle}>
        <Text style={vetStyles.experienceText}>
          <Text style={vetStyles.experienceTextHighlight}>10{' '}</Text>
          years of experience
        </Text>
        <View style={vetStyles.middleRight}>
          <View style={vetStyles.locationIconBg}>
            <Ionicon name="location-outline" size={16} color="#5A5A5A" />
          </View>
          <Text style={vetStyles.proximityText}>1.5 km</Text>
        </View>
      </View>
      <View style={vetStyles.cardBottom}>
        <Ionicon name="time-outline" size={16} color="#5A5A5A" />
        <Text style={vetStyles.availabilityTime}>Monday - Friday at 8:00 AM - 6:00 PM</Text>
      </View>
    </Pressable>
  )

  else return (
    <Text>Hello</Text>
  )
}

export default ServiceCard;

const vetStyles = StyleSheet.create({
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
});