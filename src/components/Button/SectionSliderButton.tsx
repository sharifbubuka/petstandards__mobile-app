import { FC } from "react";
import { Text, TouchableHighlight } from "react-native";

type Props = {
  label: string
  labelFontSize?: number
  labelFontWeight?: "normal" | "bold" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
  active: boolean
  activeOpacity: number
  width: string | number
  backgroundColor: string
  borderColor: string
  borderWidth?: number,
  onPress: () => void
}

const SectionSliderButton: FC<Props> = ({ 
  label, 
  labelFontSize = 18, 
  labelFontWeight = '400', 
  onPress, 
  active, 
  borderColor, 
  borderWidth = 4,
  width,
  activeOpacity,
  backgroundColor
}) => {
  return (
    <TouchableHighlight 
      activeOpacity={activeOpacity} 
      underlayColor={backgroundColor} 
      onPress={onPress}
      style={{ 
        borderBottomWidth: borderWidth, 
        borderBottomColor: active ? borderColor : 'transparent', 
        width: width,
        justifyContent: 'center',
        alignItems: 'center' 
      }}
    >
      <Text
        style={{
          fontSize: labelFontSize,
          fontWeight: labelFontWeight,
        }}
      >{label}</Text>
    </TouchableHighlight>
  )
}

export default SectionSliderButton;