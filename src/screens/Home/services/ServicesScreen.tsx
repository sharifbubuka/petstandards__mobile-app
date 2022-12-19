import { MainLayout } from "components/PageLayout";
import { FC } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const services = [1,2,3,4,5,6,7,8,9,10]

const ServicesScreen: FC = () => {
  return (
    <MainLayout horizontalPadding={0}>
      <Text style={styles.title}>Nearby Vet Services</Text>
      <View style={styles.list}>
        {services.map(service => (
          <View style={styles.service}>
            <Text>dsd</Text>
          </View>
        ))}
      </View>
    </MainLayout>
  )
}

export default ServicesScreen;

const styles = StyleSheet.create({
  title: {
    backgroundColor: 'white'
  },
  list: {

  },
  service: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  }
});