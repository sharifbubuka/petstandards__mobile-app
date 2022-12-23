import { FC } from 'react';
import * as Progress from 'react-native-progress';

type Props = {
  animated?: boolean
  indeterminate?: boolean
  indeterminateAnimationDuration?: number
  progress?: number
  color?: string
  unfilledColor?: string
  borderWidth?: number
  borderColor?: string
  width?: number | null
  height?: number
  borderRadius?: number
  useNativeDriver?: boolean
  animationConfig?: {}
  animationType?: 'decay' | 'timing' | 'spring'
}

const ProgressBar: FC<Props> = ({
  animated = true,
  indeterminate = true,
  indeterminateAnimationDuration = 1000,
  progress = 0.5,
  color = 'rgba(0, 122, 255, 1)',
  unfilledColor = undefined,
  borderWidth = 1,
  borderColor = undefined,
  borderRadius = 4,
  width = null,
  height = 6,
  useNativeDriver = false,
  animationConfig = { bounciness: 0 },
  animationType = 'timing'
}) => {
  return (
    <Progress.Bar
      animated={animated}
      indeterminate={indeterminate}
      indeterminateAnimationDuration={indeterminateAnimationDuration}
      progress={progress}
      color ={color}
      unfilledColor={unfilledColor}
      borderWidth={borderWidth}
      borderColor={borderColor}
      borderRadius={borderRadius}
      width={width}
      height={height}
      useNativeDriver={useNativeDriver}
      animationConfig={animationConfig}
      animationType={animationType}
    />
  )
}

export default ProgressBar