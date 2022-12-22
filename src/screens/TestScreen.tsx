import { SheetManager } from 'react-native-actions-sheet';
import { BaseButton } from 'components/Button';
import { FC } from 'react';
import { Text, View, Button } from 'react-native'

export const TestScreen: FC = () => {
  return (
    <View style={{ padding: 20 }}>
      {/* <BottomActionSheet /> */}
      <Button title='Click me' onPress={() => SheetManager.show('Service Provider Details', { payload: { value: 'Hello World' } })} />
    </View>
  )
}

