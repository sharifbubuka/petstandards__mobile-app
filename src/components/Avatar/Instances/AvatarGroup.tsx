import { BaseIcon, ICON_NAMES } from 'components/Icon';
import { FC } from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import BaseAvatar from '../BaseAvatar';

type Props = {
  size?: number
  avatarStyles?: ViewStyle,
  avatars: string[]
  others?: number
}

const AvatarGroup: FC<Props> = ({
  size = 30,
  avatarStyles,
  avatars,
  others,
}) => {
  return (
    <View style={baseStyles.group}>
      {avatars.map((avatar, index) => (
        <BaseAvatar
        size={size}
        imageSource={avatar}
        style={[{ 
          marginRight: size * -0.2, 
          elevation: avatars.length - index,
          borderWidth: Math.ceil(0.05 * size),
          borderColor: '#fff' 
        }, {...avatarStyles}]} 
        key={index} 
      />
      ))}
      {others && 
      <View 
        style={[baseStyles.others, 
        { 
          width: size, 
          height: size,
          borderWidth: avatarStyles?.borderWidth ? avatarStyles.borderWidth : Math.ceil(0.05 * size),
          borderColor: avatarStyles?.borderColor ? avatarStyles.borderColor : '#fff'  
          
        }]}>
        <BaseIcon name={ICON_NAMES.PLUS} color='black' size={size * 0.28} />
        <Text style={[baseStyles.text, { fontSize: size * 0.3 }]}>{others}</Text>
      </View>}
    </View>
  )
}

export default AvatarGroup;

const baseStyles = StyleSheet.create({
  group: {
    flexDirection: 'row',
    marginBottom: 15
  },
  others: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    borderRadius: 100,
  },
  text: {
    fontSize: 10,
    fontWeight: '500'
  }
});