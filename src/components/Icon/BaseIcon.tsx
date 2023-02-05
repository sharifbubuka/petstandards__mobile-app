import { FC } from 'react';
import { ICON_NAMES } from "./enums";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FontAwesome5BrandsIcons from 'react-native-vector-icons/FontAwesome5';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import IoniconIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import OcticonIcon from 'react-native-vector-icons/Octicons';
import ZocialIcon from 'react-native-vector-icons/Zocial';
import SimpleLineIconIcon from 'react-native-vector-icons/SimpleLineIcons';

type Props = {
  name: ICON_NAMES | undefined
  size?: number
  color?: string
}

enum LIBRARY_NAMES {
  ANTDESIGN = 'AntDesign',
  ENTYPO = 'Entypo',
  EVILICONS = 'EvilIcon',
  FEATHER = 'Feather',
  FONTAWESOME = 'FontAwesome',
  FONTAWESOME5BRANDS = 'FontAwesome5Brands',
  FONTISTO = 'Fontisto',
  FOUNDATION = 'Foundation',
  IONICONS = 'Ionicons',
  MATERIALICONS = 'MaterialIcons',
  MATERIALCOMMUNITY = 'MaterialCommunity',
  OCTICONS = 'Octicons',
  ZOCIAL = 'Zocial',
  SIMPLELINEICONS = 'SimpleLineIcons'
}

const ICONS_REGISTRY = {
  'eye': LIBRARY_NAMES.ENTYPO,
  'eye-with-line': LIBRARY_NAMES.ENTYPO,
  'verified': LIBRARY_NAMES.MATERIALICONS,
  'home': LIBRARY_NAMES.FOUNDATION,
  'search1': LIBRARY_NAMES.ANTDESIGN,
  'calendar': LIBRARY_NAMES.ANTDESIGN,
  'cart-outline': LIBRARY_NAMES.MATERIALCOMMUNITY,
  'md-ellipsis-vertical': LIBRARY_NAMES.IONICONS,
  'md-paw-sharp': LIBRARY_NAMES.IONICONS,
  'dog': LIBRARY_NAMES.MATERIALCOMMUNITY,
  'person-sharp': LIBRARY_NAMES.IONICONS,
  'apple': LIBRARY_NAMES.FONTAWESOME5BRANDS,
  'google': LIBRARY_NAMES.FONTAWESOME5BRANDS,
  'chevron-down': LIBRARY_NAMES.FEATHER,
  'info-circle': LIBRARY_NAMES.FONTAWESOME5BRANDS,
  'exclamation-triangle': LIBRARY_NAMES.FONTAWESOME,
  'times-circle': LIBRARY_NAMES.FONTAWESOME,
  'check-circle': LIBRARY_NAMES.FONTAWESOME,
  'ios-moon-sharp': LIBRARY_NAMES.IONICONS, 
  'ios-sunny-sharp': LIBRARY_NAMES.IONICONS, 
  'plus': LIBRARY_NAMES.ENTYPO,
  'minus': LIBRARY_NAMES.ENTYPO,
  'lock': LIBRARY_NAMES.MATERIALCOMMUNITY,
  'lock-open': LIBRARY_NAMES.MATERIALCOMMUNITY,
  'account-circle': LIBRARY_NAMES.MATERIALCOMMUNITY,
  'contact-support': LIBRARY_NAMES.MATERIALICONS,
  'payments': LIBRARY_NAMES.MATERIALICONS,
  'notifications': LIBRARY_NAMES.IONICONS,
  'arrow-back-sharp': LIBRARY_NAMES.IONICONS
};

const BaseIcon: FC<Props> = ({
  name,
  size = 25,
  color = 'black'
}) => {
  const iconLibrary = name && ICONS_REGISTRY[name];
  if (name) {
    switch (iconLibrary) {
      case LIBRARY_NAMES.ANTDESIGN: return (
        <AntDesignIcon name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.ENTYPO: return (
        <EntypoIcon name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.EVILICONS: return (
        <EvilIcon name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.FEATHER: return (
        <FeatherIcon name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.FONTAWESOME: return (
        <FontAwesomeIcon name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.FONTAWESOME5BRANDS: return (
        <FontAwesome5BrandsIcons name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.FONTISTO: return (
        <FontistoIcon name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.FOUNDATION: return (
        <FoundationIcon name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.IONICONS: return (
        <IoniconIcon name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.MATERIALICONS: return (
        <MaterialIcon name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.MATERIALCOMMUNITY: return (
        <MaterialCommunityIcon name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.OCTICONS: return (
        <OcticonIcon name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.ZOCIAL: return (
        <ZocialIcon name={name} size={size} color={color} />
      );
  
      case LIBRARY_NAMES.SIMPLELINEICONS: return (
        <SimpleLineIconIcon name={name} size={size} color={color} />
      );
  
      default: return (<></>)
        break;
    }
  } else {
    return (
      <></>
    )
  }
}

export default BaseIcon;