import { FC, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Switch } from 'react-native-switch';

type Props = {
  value: boolean,
  disabled?: boolean
  // onChange?: () => void
  onValueChange?: (value: boolean) => void
}

const BaseSwitch: FC<Props> = ({ 
  value,
  disabled = false,
  onValueChange,
 }) => {

  return (
    // <Switch
    //   value={value}
    //   disabled={disabled} 
    //   onChange={onChange}
    //   onValueChange={onValueChange}
    //   ios_backgroundColor='blue'
    //   thumbColor='blue'
    //   trackColor={{ false: 'red', true: 'green' }}
    // />
    <Switch
    value={value}
    onValueChange={onValueChange}
    disabled={disabled}
    // activeText={'On'}
    // inActiveText={'Off'}
    circleSize={25}
    barHeight={30}
    // circleBorderWidth={1}
    backgroundActive={'#374986'}
    // backgroundInactive={'gray'}
    // circleActiveColor={'#30a566'}
    // circleInActiveColor={'#000000'}
    // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
    // changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
    // innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
    // outerCircleStyle={{}} // style for outer animated circle
    renderActiveText={false}
    renderInActiveText={false}
    switchLeftPx={1.5} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
    switchRightPx={1.5} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
    switchWidthMultiplier={2.5} // multiplied by the `circleSize` prop to calculate total width of the Switch
    // switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
  />
  )
}

export default BaseSwitch;

const baseStyles = StyleSheet.create({

});