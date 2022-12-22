import { NavigationProp } from "@react-navigation/native";
import ServiceCard from "components/Card/ServiceCard";
import { StaticStarRate } from "components/RatingStar";
import { SERVICES } from "constants/enums";
import { FC } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons';

type Service = {
  serviceId: string
}

type Props = {
  title: string
  serviceType: SERVICES,
  services: Service[],
  navigation: NavigationProp<any>
}

const ServicesSlider: FC<Props> = ({ services, serviceType, title, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{ title }</Text>
        {/* <Text style={styles.cta}>View all</Text> */}
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
        renderItem={({ item, index }) => 
          <ServiceCard serviceType={serviceType} service={item} onPress={() => navigation.navigate('Marketplace', { screen: 'Service' })} />
        }
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
  }
})

export default ServicesSlider;