import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import Ionicon from 'react-native-vector-icons/Ionicons';

type Props = {
  size?: 'small' | 'medium' | 'large' | 'extra-large',
  rating: number,
  color?: string
}

const StaticStarRate: FC<Props> = ({ size = 'medium', rating, color = '#ffa534' }) => {
  const fullStars = Math.floor(rating);
  const halfStars = Math.round(rating % fullStars);
  const sizeNum = size === 'small' ? 12 : size === 'medium' ? 14 : size === 'large' ? 16 : 18
  
  return (
    <View style={styles.container}>
      {new Array(fullStars).fill(1).map((star, index) => (
        <Ionicon 
          style={styles.star} 
          key={index} 
          name="md-star" 
          size={sizeNum} 
          color={color} 
        />
      ))}
      {new Array(halfStars).fill(1).map((star, index) => (
        <Ionicon 
          style={styles.star} 
          key={index} 
          name="md-star-half-sharp" 
          size={sizeNum + 1} 
          color={color} 
        />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  star: {
    marginRight: 2
  }
})

export default StaticStarRate;