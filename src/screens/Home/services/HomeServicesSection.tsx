import { NavigationProp } from "@react-navigation/native";
import { ServiceCategoriesSlider, ServicesSlider } from "components/Sliders";
import { SERVICES } from "constants/enums";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  navigation: NavigationProp<any>
}

const HomeServicesScreen: FC<Props>  = ({ navigation }) => {
  return (
    <View>
      <View>
        <ServiceCategoriesSlider
          services={[{ category_id: '1', name: 'Veterinary' }, { category_id: '2', name: 'Grooming' }, { category_id: '3', name: 'Walking' }, { category_id: '4', name: 'Adoption' }, { category_id: '5', name: 'Boarding' }]} 
          activeBackgroundColor='#3B71F3'
          // innactiveBackgroundColor="#628DF5"
        />
      </View>
      <View>
        <ServicesSlider
          navigation={navigation} 
          title="Nearby"
          serviceType={SERVICES.VETERINARY}
          services={[{ serviceId: '1' }, { serviceId: '2' }, { serviceId: '3' }, { serviceId: '4' }, { serviceId: '5' }, { serviceId: '6' }]} 
        />
        <ServicesSlider 
          navigation={navigation} 
          title="Highly Rated"
          serviceType={SERVICES.VETERINARY}
          services={[{ serviceId: '1' }, { serviceId: '2' }, { serviceId: '3' }, { serviceId: '4' }, { serviceId: '5' }, { serviceId: '6' }]} 
        />
        <ServicesSlider
          navigation={navigation} 
          title="Promoted"
          serviceType={SERVICES.VETERINARY}
          services={[{ serviceId: '1' }, { serviceId: '2' }, { serviceId: '3' }, { serviceId: '4' }, { serviceId: '5' }, { serviceId: '6' }]} 
        />
        <ServicesSlider 
          navigation={navigation} 
          title="Recently saved"
          serviceType={SERVICES.VETERINARY}
          services={[{ serviceId: '1' }, { serviceId: '2' }, { serviceId: '3' }, { serviceId: '4' }, { serviceId: '5' }, { serviceId: '6' }]} 
        />
      </View>
    </View>
  )
}

export default HomeServicesScreen;

const styles = StyleSheet.create({

});