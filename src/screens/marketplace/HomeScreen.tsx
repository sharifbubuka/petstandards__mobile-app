import { useNavigation } from "@react-navigation/native";
import { SectionSliderButton } from "components/Button";
import { ServiceCategoriesSlider, ServicesSlider } from "components/Carousel";
import React, { FC, useState } from "react";
import { Text, View, StyleSheet, FlatList, useWindowDimensions, StatusBar, ScrollView, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeServicesSection from './services/HomeServicesSection';

const sections = [
  { name: 'Services' },
  { name: 'Products' }
]

const HomeScreen: FC = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  
  const { width } = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { paddingHorizontal: width * 0.05 }]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <Text style={styles.nameGreeting}>Good evening Sharif</Text>
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
        { sections[activeSectionIndex].name === 'Services' ? <HomeServicesSection navigation={navigation} /> : <></> }
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