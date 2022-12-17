import { ServiceCategoriesSlider, ServicesSlider } from "components/Sliders";
import React, { FC } from "react";
import { Text, View, StyleSheet, FlatList, useWindowDimensions, StatusBar, ScrollView, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ServicesScreen: FC = () => {
  
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={[styles.container, { paddingVertical: width * 0.05, paddingHorizontal: width * 0.05 }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <Text style={styles.nameGreeting}>Hi Sharif</Text>
          {/* <Text style={styles.timeGreeting}>Good morning!</Text> */}
          <Text style={styles.timeGreeting}>What does Pixel want today?</Text>
        </View>
        <View style={styles.buttons}>
          <TouchableHighlight activeOpacity={0.7} underlayColor="#D7D7D7" style={[styles.button, { borderBottomWidth: 4, borderBottomColor: '#3B71F3' }]} onPress={() => console.log('clicked')}>
            <View>
              <Text style={styles.buttonText}>Services</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight activeOpacity={0.7} underlayColor="#D7D7D7" style={styles.button} onPress={() => console.log('clicked')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Products</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View>
          {/* <ServiceCategoriesSlider
            services={[
              { category_id: '1', name: 'Veterinary' },
              { category_id: '2', name: 'Grooming' },
              { category_id: '3', name: 'Walking' },
              { category_id: '4', name: 'Adoption' },
              { category_id: '5', name: 'Boarding' }
            ]} 
          /> */}
        </View>
        <View>
          <ServicesSlider 
            title="Nearby"
            services={[{ serviceId: '1' }, { serviceId: '2' }, { serviceId: '3' }, { serviceId: '4' }, { serviceId: '5' }, { serviceId: '6' }]} 
          />
          <ServicesSlider 
            title="Highly Rated"
            services={[{ serviceId: '1' }, { serviceId: '2' }, { serviceId: '3' }, { serviceId: '4' }, { serviceId: '5' }, { serviceId: '6' }]} 
          />
          <ServicesSlider 
            title="Promoted"
            services={[{ serviceId: '1' }, { serviceId: '2' }, { serviceId: '3' }, { serviceId: '4' }, { serviceId: '5' }, { serviceId: '6' }]} 
          />

          <ServicesSlider 
            title="Recently saved"
            services={[{ serviceId: '1' }, { serviceId: '2' }, { serviceId: '3' }, { serviceId: '4' }, { serviceId: '5' }, { serviceId: '6' }]} 
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default ServicesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white'
  },
  top: {
    // backgroundColor: 'red',
    // height: 200
    marginBottom: 20
  },
  buttons: {
    height: 50,
    backgroundColor: '#DFDFDF',
    marginBottom: 20,
    flexDirection: 'row'
  },
  button: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '400'
  },
  greeting: {
    marginBottom: 10
  },
  nameGreeting: {
    fontSize: 24,
    fontWeight: '600'
  },
  timeGreeting: {
    fontSize: 20,
    fontWeight: '500',
    color: '#5A5A5A'
  }
});