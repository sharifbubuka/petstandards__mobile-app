import { SheetManager } from 'react-native-actions-sheet';
import { BaseButton } from 'components/Button';
import { FC, useState } from 'react';
import { Text, View, Button } from 'react-native'
import { CircularProgress, ProgressBar } from 'components/Progress';
import * as Progress from 'react-native-progress';
import { BaseModal, Instances } from 'components/Modal';
import { BaseIcon, ICON_NAMES } from 'components/Icon';
import { BaseAvatar } from 'components/Avatar';
import { BaseTypography } from 'components/Typography';
import Toast from 'react-native-toast-message';
import { BaseInput } from 'components/TextInput';

export const TestScreen: FC = () => {
  const [visible, setVisible] = useState(true);
  const showToast = () => {
    Toast.show({
      type: 'info',
      text1: '👋 Hello Sharif!',
      text2: 'Please rewrite your code and try again later',
      props: 'Hello'
    });
  }
  return (
    <View style={{ padding: 20 }}>
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
      {/* <BaseAvatar imageSource='https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' /> */}
      {/* <BaseAvatar /> */}

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
    </View>
  )
}

