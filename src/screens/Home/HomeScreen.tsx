import { SectionSliderButton } from "components/Buttons";
import { ServiceCategoriesSlider, ServicesSlider } from "components/Sliders";
import React, { FC, useState } from "react";
import { Text, View, StyleSheet, FlatList, useWindowDimensions, StatusBar, ScrollView, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const sections = [
  { name: 'Services' },
  { name: 'Products' }
]

const HomeScreen: FC = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  
  const { width } = useWindowDimensions();

  return (
    <View style={[styles.container, { paddingHorizontal: width * 0.05 }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <Text style={styles.nameGreeting}>Good evening Sharif</Text>
          {/* <Text style={styles.question}>What does Pixel want today?</Text> */}
        </View>
        <View style={styles.buttons}>
          {sections.map((section, index) => (
            <SectionSliderButton
              key={index}
              label={section.name}
              active={index === activeSectionIndex}
              backgroundColor="#D7D7D7"
              activeOpacity={0.7}
              borderColor="#3B71F3"
              borderWidth={4}
              width='50%'
              onPress={() => setActiveSectionIndex(index)}
            />
          ))}
        </View>
        <View>
          <ServiceCategoriesSlider
            services={[{ category_id: '1', name: 'Veterinary' }, { category_id: '2', name: 'Grooming' }, { category_id: '3', name: 'Walking' }, { category_id: '4', name: 'Adoption' }, { category_id: '5', name: 'Boarding' }]} 
            activeBackgroundColor='#3B71F3'
            // innactiveBackgroundColor="#628DF5"
          />
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
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10
  },
  top: {
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
    // marginBottom: 10
  },
  nameGreeting: {
    fontSize: 26,
    fontWeight: '600',
    // marginBottom: 0
  },
  question: {
    fontSize: 20,
    fontWeight: '500',
    color: '#5A5A5A'
  }
});