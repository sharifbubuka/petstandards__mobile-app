import { FC } from "react";
import { Text, View, StyleSheet } from "react-native";

const RemindersScreen: FC = () => {
  return (
    <View style={styles.container}>
      <Text>I am the Reminders screen</Text>
    </View>
  )
}

export default RemindersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});