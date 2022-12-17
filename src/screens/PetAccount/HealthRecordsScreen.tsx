import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

const PetHealthRecordsScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>I am the Pet Health Records screen</Text>
    </View>
  )
}

export default PetHealthRecordsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});