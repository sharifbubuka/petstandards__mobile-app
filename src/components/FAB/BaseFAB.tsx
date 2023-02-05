import { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { AnimatedFAB } from 'react-native-paper';

type Props = {

}

const BaseFAB: FC<Props> = () => {
  const [isExtended, setIsExtended] = useState(false);

  const extend = () => {
    setIsExtended(true);
    setTimeout(() => {
      setIsExtended(false);
    }, 5000);
  }
  return (
    <AnimatedFAB
      icon='plus'
      label='New Reminder'
      extended={isExtended}
      onPress={extend}
      visible={true}
      animateFrom={'right'}
      iconMode={'dynamic'}
      variant="tertiary"
      color='red'
      style={{ position: 'absolute', right: 20, bottom: 130 }}
    />
  )
}

export default BaseFAB;