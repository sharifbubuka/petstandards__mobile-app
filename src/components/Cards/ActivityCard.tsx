import { FC, useState } from "react";
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Animated } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';

const data = [
  {id: '1', name: 'A'},
  {id: '2', name: 'B'},
  {id: '3', name: 'C'},
  {id: '4', name: 'D'}
]

type Activity = {

}

type Props = {
    // activity: Activity
}

const ActivityCard: FC<Props> = ({  }) => {
  const [lists, setLists] = useState(data);

  const deleteItem = (index: number) => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item, index }) => {
          const leftSwipe = (progress: any, dragX: any) => {
            const scale = dragX.interpolate({
              inputRange: [0, 100],
              outputRange: [0, 1],
              extrapolate: 'clamp',
            });
            return (
              <TouchableOpacity onPress={() => deleteItem(index)} activeOpacity={0.6}>
                <View style={styles.deleteBox}>
                  <Animated.Text style={{transform: [{scale: scale}]}}>
                      Delete
                    </Animated.Text>
                  </View>
              </TouchableOpacity>
            )
          }

          return (
            <Swipeable renderLeftActions={leftSwipe}>
              <View style={styles.container}>
                <Text>My name is Sharif.</Text>
              </View>
            </Swipeable>
          )
        }}
      />
    </View>
  )
}

export default ActivityCard;

const styles = StyleSheet.create({
  container: {

  },
  deleteBox: {

  },
  card: {
    height: 80,
    backgroundColor: 'white',
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderLeftWidth: 6,
    borderLeftColor: 'green'
  },
  title: {
    fontSize: 18,
    fontWeight: '500'
  },
  description: {

  }
});