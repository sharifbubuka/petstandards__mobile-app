import { SheetManager } from 'react-native-actions-sheet';
import { BaseButton } from 'components/Button';
import { FC, useState } from 'react';
import { Text, View, Button, useWindowDimensions, ScrollView } from 'react-native'
import { CircularProgress, ProgressBar } from 'components/Progress';
import * as Progress from 'react-native-progress';
import { BaseModal, Instances } from 'components/Modal';
import { BaseIcon, ICON_NAMES } from 'components/Icon';
import { BaseAvatar } from 'components/Avatar';
import { BaseTypography } from 'components/Typography';
import Toast from 'react-native-toast-message';
import { BaseInput } from 'components/TextInput';
import { useTheme } from 'context/theme';
import { BaseSwitch } from 'components/Switch';
import { BaseStepper } from 'components/Stepper';
import { GradientButton, LoadableButton } from 'components/Button/Instances';
import { BaseFAB } from 'components/FAB';
import { BaseCheckBox } from 'components/CheckBox';
import { AvatarGroup } from 'components/Avatar/Instances';

export const TestScreen: FC = () => {
  const [visible, setVisible] = useState(true);
  const { toggleTheme, currentTheme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [switchValue, setSwitchValue] = useState(false);
  const { height } = useWindowDimensions()

  const avatars = [
    'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ]

  const handleLoadingButton = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }

  const handleChecked = () => {
    setChecked(!checked);
    setTimeout(() => {
      setChecked(!checked);
    }, 5000);
  }

  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: '👋 Hello Sharif!',
      text2: 'Please rewrite your code and try again later',
      props: 'Hello'
    });
  }
  return (
    <View style={{ padding: 40, position: 'relative', minHeight: height }}>
      {/* <BottomActionSheet /> */}
      {/* <Button title='Click me' onPress={() => SheetManager.show('Business Details', { payload: { value: 'Hello World' } })} /> */}

      {/* Circular Progress */}
      {/* <CircularProgress /> */}
      {/* Bar Progress */}
      {/* <ProgressBar /> */}

      {/* Base Modal */}
      {/* <Button title='Click Me' onPress={() => setVisible(!visible)} />
      <Instances.SimpleModal isVisible={visible}>
        <Text style={{ padding: 40, backgroundColor: 'white' }}>I am the modal content</Text>
      </Instances.SimpleModal>
       */}

      {/* Icons */}
       {/* <BaseIcon name={ICON_NAMES.APPLE_LOGO} /> */}

      {/* Avatar */}
      {/* <BaseAvatar imageSource='https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
      <BaseAvatar />
      <AvatarGroup avatars={avatars} others={16} /> */}

      {/* Typography */}
      {/* <BaseTypography type='display'>Hello there, I am bored.</BaseTypography>
      <BaseTypography type='h1'>Hello there</BaseTypography>
      <BaseTypography type='h2'>Hello there</BaseTypography>
      <BaseTypography type='h3'>Hello there</BaseTypography>
      <BaseTypography type='h4'>Hello there</BaseTypography>
      <BaseTypography type='h5'>Hello there</BaseTypography>
      <BaseTypography type='h6'>Hello there</BaseTypography>
      <BaseTypography type='p'>Hello there</BaseTypography>
      <BaseTypography type='caption'>6</BaseTypography> */}

      {/* Toast */}
      {/* <Button title='Show toast' onPress={showToast} /> */}

      {/* Input */}
      {/* <Text>{currentTheme}</Text> */}
      {/* <Button title='Toggle Theme' onPress={toggleTheme} /> */}

      {/* Stepper */}
      {/* <BaseStepper /> */}

      {/* Button */}
      {/* <BaseButton styles={{ marginBottom: 20 }} type='primary' icon={ICON_NAMES.APPLE_LOGO} onPress={() => null}>Register with Google</BaseButton>
      <BaseButton styles={{ marginBottom: 20 }} type='secondary' icon={ICON_NAMES.APPLE_LOGO} onPress={() => null}>Register with Google</BaseButton>
      <BaseButton styles={{ marginBottom: 20 }} type='tertiary' icon={ICON_NAMES.APPLE_LOGO} onPress={() => null}>Register with Google</BaseButton>


      <LoadableButton styles={{ marginBottom: 20 }} icon={ICON_NAMES.APPLE_LOGO} loading={loading} loadingText="Registering user" onPress={() => handleLoadingButton()}>Register</LoadableButton>
       */}
      {/* <GradientButton 
        styles={{ marginBottom: 20 }} 
        gradient={{
          colors: ['#e6891f', '#e61f87'],
          start: { x: 0, y: 0 },
          end: { x: 1, y: 0 }
        }} 
        icon={ICON_NAMES.LOCK_CLOSED} 
        onPress={() => console.log('clicked')}
      >Upgrade to Premium</GradientButton>  */}
    
      {/* TextInput */}
      {/* <BaseInput  onIconPress={() => console.log('clicked')} value='sharifbubuka256@gmail.com' styles={{ marginBottom: 15 }} />
      <BaseInput  onIconPress={() => console.log('clicked')} value='sharifbubuka256@gmail.com' errorMessage='Email address is required!' icon={ICON_NAMES.CLOSED_EYE} styles={{ marginBottom: 15 }} inputProps={{ secureTextEntry: true }} />
      <BaseButton styles={{ marginBottom: 20 }} type='primary' icon={ICON_NAMES.APPLE_LOGO} onPress={() => null}>Register with Apple</BaseButton>
     */}
      {/* CheckBox */}
      {/* <BaseCheckBox style={{ }} checked={checked} onPress={handleChecked}>Should we send the medicine now?</BaseCheckBox> */}
    
     {/* Switch */}
     <BaseSwitch value={switchValue} onValueChange={(value) => setSwitchValue(value)} />
    </View>
  )
}

