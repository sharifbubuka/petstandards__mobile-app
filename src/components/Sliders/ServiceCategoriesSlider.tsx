import { ServiceCategory } from "constants/types";
import { FC, useState } from "react";
import { FlatList, Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons';

type Props = {
  services: ServiceCategory[]
  activeBackgroundColor: string
  innactiveBackgroundColor?: string
}

const ServiceCategoriesSlider: FC<Props> = ({ services, activeBackgroundColor, innactiveBackgroundColor = 'white' }) => {
  const [activePill, setActivePill] = useState(0);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.slider}
        keyExtractor={category => category.category_id}
        horizontal
        snapToInterval={100 + 20}
        data={services}
        ListEmptyComponent={() => <></>}
        renderItem={({ item, index }) => (
          <TouchableHighlight 
            activeOpacity={0.9} 
            style={[styles.pill]} 
            key={index} 
            onPress={() => setActivePill(index)}>
            <View style={[styles.categoryBox, { 
              backgroundColor: activePill === index ? activeBackgroundColor : innactiveBackgroundColor,
            }]}>
              <Text style={[styles.text, { color: activePill === index ? 'white' : 'black' }]}>{item.name}</Text>
            </View>
          </TouchableHighlight>
        )}
        showsHorizontalScrollIndicator={true}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  slider: {
    // backgroundColor: 'green',
    paddingBottom: 20
  },
  pill: {
    width: 100,
    marginRight: 20,
    borderRadius: 999,
    overflow: 'hidden',
    // shadowColor: "#000",
    // shadowOffset: {
	  //   width: 0,
	  //   height: 5,
    // },
    // shadowOpacity: 0.34,
    // shadowRadius: 6.27,
    // elevation: 10,
  },
  categoryBox: {
    // borderWidth: 2,
    // borderColor: 'blue',
    // backgroundColor: '#3B71F3',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'white',
    fontWeight: '500'
  }
})

export default ServiceCategoriesSlider;