import { FC } from 'react';
import { View, ViewStyle } from 'react-native';
import * as Progress from 'react-native-progress';

type Props = {
  animated?: boolean
  rotating?: boolean
  progress?: number
  unfilledColor?: string
  borderWidth?: number
  borderColor?: string | undefined
  size?: number
  thickness?: number
  showsText?: boolean
  formatText?: () => string | null 
  textStyle?: any
  allowFontScaling?: boolean
  direction?: 'clockwise' | 'counter-clockwise'
  fill?: string | undefined
  color?: string
  strokeCap?: 'round' | 'butt' | 'square',
  styles?: ViewStyle
}

const CircularProgress: FC<Props> = ({
  animated = false,
  rotating = true,
  progress = 0,
  unfilledColor = undefined,
  borderWidth = 1,
  borderColor = undefined,
  size = 40,
  fill = undefined,
  thickness = 3,
  showsText = false,
  formatText = () => 'null',
  textStyle = null,
  allowFontScaling = true,
  direction = 'clockwise',
  color = 'rgba(0, 122, 255, 1)',
  strokeCap = 'butt',
  styles,
}) => {
  return (
    <View style={[styles && styles]}>
      <Progress.Circle
        animated={animated}
        indeterminate={rotating}
        progress={progress}
        color={color}
        unfilledColor={unfilledColor}
        borderWidth={borderWidth}
        borderColor={borderColor ? borderColor : color}
        size={size}
        fill={fill}
        thickness={thickness}
        showsText={showsText}
        formatText={formatText}
        textStyle={textStyle}
        allowFontScaling={allowFontScaling}
        direction={direction}
        strokeCap={strokeCap}
      />
    </View>
  )
}

export default CircularProgress;