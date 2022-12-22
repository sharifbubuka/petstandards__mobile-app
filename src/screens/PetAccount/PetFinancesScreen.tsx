import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

const PetFinancesScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>I am the Pet Financial Records screen</Text>
    </View>
  )
}

export default PetFinancesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});