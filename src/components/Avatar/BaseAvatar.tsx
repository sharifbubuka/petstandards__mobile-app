import { BaseIcon, ICON_NAMES } from 'components/Icon';
import { FC } from 'react';
import { View, Pressable, Image } from 'react-native';

type Props = {
  avatarType?: 'circular'
  imageSource?: string
  avatarSize?: number
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
} 

const BaseAvatar: FC<Props> = ({
  avatarType = 'circular',
  avatarSize = 50,
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
  onPress = undefined
}) => {
  if (!onPress) {
    if (imageSource) {
      return (
        <View
        style={{
          width: avatarSize,
          height: avatarSize,
          overflow: 'hidden',
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: marginLeft,
          marginRight: marginRight,
          marginTop: marginTop,
          marginBottom: marginBottom,
          borderRadius: avatarType === 'circular' ? 100 : avatarBorderRadius,
          // backgroundColor: '#D8D9CF'
        }}
      >
        <Image 
          style={{ 
            width: '100%', 
            height: '100%',
            borderRadius: avatarType === 'circular' ? 100 : avatarBorderRadius, 
          }} 
          source={{ uri: imageSource }} 
        />
      </View>
      )
    } else {
      return (
        <View 
          style={{
            width: avatarSize,
            height: avatarSize,
            overflow: 'hidden',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: marginLeft,
            marginRight: marginRight,
            marginTop: marginTop,
            marginBottom: marginBottom,
            borderRadius: avatarType === 'circular' ? 100 : avatarBorderRadius,
          }}
        >
          <BaseIcon name={ICON_NAMES.USER} size={avatarSize * 0.6} color='#73777B' />
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