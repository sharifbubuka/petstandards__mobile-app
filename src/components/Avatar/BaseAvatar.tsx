import { BaseIcon, ICON_NAMES } from 'components/Icon';
import { FC } from 'react';
import { View, Pressable, Image, ViewStyle } from 'react-native';

type Props = {
  avatarType?: 'circular'
  imageSource?: string
  size?: number
  marginLeft?: number
  marginRight?: number
  marginTop?: number
  marginBottom?: number
  backgroudColor?: string
  avatarBorderRadius?: number
  avatarBorderWidth?: number
  avatarBorderColor?: string
  badgeWidth?: number
  badgeHeight?: number
  showActiveBadge?: boolean
  badgeSize?: number
  badgeColor?: string
  badgeText?: string
  badgeTextColor?: string
  onPress?: () => null
  style?: ViewStyle | ViewStyle[]
} 

const BaseAvatar: FC<Props> = ({
  avatarType = 'circular',
  size = 50,
  imageSource,
  marginLeft = 0,
  marginRight = 0,
  marginTop  = 0,
  marginBottom  = 0,
  backgroudColor = '',
  avatarBorderRadius = 0,
  avatarBorderWidth = 0,
  avatarBorderColor = undefined,
  showActiveBadge = true,
  badgeWidth = 0.2,
  badgeHeight = 0.2,
  badgeSize = 0.2,
  badgeColor = 'green',
  badgeText = undefined,
  badgeTextColor = 'white',
  onPress = undefined,
  style
}) => {
  if (!onPress) {
    if (imageSource) {
      return (
        <View
        style={[{
          width: size,
          height: size,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
          marginBottom: marginBottom,
          borderRadius: avatarType === 'circular' ? 100 : avatarBorderRadius,
          // backgroundColor: '#D8D9CF'
        }, style]}
      >
        <Image 
          style={[{ 
            width: '100%', 
            height: '100%',
            borderRadius: avatarType === 'circular' ? 100 : avatarBorderRadius, 
          }]} 
          source={{ uri: imageSource }} 
        />
      </View>
      )
    } else {
      return (
        <View 
          style={[{
            width: size,
            height: size,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            marginBottom: marginBottom,
            borderRadius: avatarType === 'circular' ? 100 : avatarBorderRadius,
          }, style]}
        >
          <BaseIcon name={ICON_NAMES.ACCOUNT_CIRCLE} size={size} color='#73777B' />
        </View>
      )
    }
  } else {
    return (
      <Pressable onPress={onPress}>

      </Pressable>
    )
  }
}

export default BaseAvatar;