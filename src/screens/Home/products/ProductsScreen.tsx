import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

const ProductsScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>I am the Products screen</Text>
    </View>
  )
}

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});