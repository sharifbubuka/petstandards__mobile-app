import { FloatingActionButton, SectionSliderButton } from "components/Buttons";
import { ActivityCard } from "components/Cards";
import { ServiceCategoriesSlider, ServicesSlider } from "components/Sliders";
import React, { FC, useState } from "react";
import { Text, View, StyleSheet, FlatList, useWindowDimensions, StatusBar, ScrollView, Animated } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { PanG } from 'react-native-reanimated'
import Swipeable from "react-native-gesture-handler/Swipeable";

const sections = [
  { name: 'Activities', title: 'Recurring activities' },
  { name: 'Reminders', title: 'Your reminders' }
]

const ActivitiesHomeScreen: FC = () => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  
  const { width, height } = useWindowDimensions();

  return (
    <View style={[styles.container, { paddingHorizontal: width * 0.05 }]}>
      <View>
        {/* <View style={styles.buttons}>
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
        </View> */}
        <View style={styles.top}>
          <Text style={styles.title}>{sections[activeSectionIndex].title}</Text>
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
              // borderColor="black"
              borderWidth={4}
              width='50%'
              onPress={() => setActiveSectionIndex(index)}
            />
          ))}
        </View>
        <ActivityCard />
      </View>
      <FloatingActionButton
        dimensions={60}
        right={width * 0.05}
        bottom={20}
        backgroundColor='#3B71F3'
        underlayColor="#628DF5"
        onPress={() => console.log('clicked')} 
      />
    </View>
  )
}

export default ActivitiesHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  top: {
    marginBottom: 10
  },
  buttons: {
    height: 50,
    backgroundColor: '#DFDFDF',
    // marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row'
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2
  },
  section: {
    position: 'absolute',
    height: 60,
    width: 60,
    borderRadius: 100,
    backgroundColor: 'red',
    bottom: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});