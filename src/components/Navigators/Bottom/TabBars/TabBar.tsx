import { FC } from "react"
import { Text, TouchableHighlight, StyleSheet } from "react-native"

type Props = {
 
}

const TabBar: FC = () => {
  return (
    <TouchableHighlight style={styles.button} >
      <Text>TabBar</Text>
    </TouchableHighlight>
  )
}

export default TabBar;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red'
  }
})