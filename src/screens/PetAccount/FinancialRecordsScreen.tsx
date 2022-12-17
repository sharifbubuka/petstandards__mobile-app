import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

const PetFinancialRecordsScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>I am the Pet Financial Records screen</Text>
    </View>
  )
}

export default PetFinancialRecordsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});