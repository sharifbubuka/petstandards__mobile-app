import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

const ActivitiesScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>I am the Activities screen</Text>
    </View>
  )
}

export default ActivitiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});