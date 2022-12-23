/**
 * BASE MODAL
 * Foundational Library: react-native-modal ('https://www.npmjs.com/package/react-native-modal')
 * Developed By: Bubuka Sharif
 * Date: 23th December 2022 4:40 PM
 */

import { FC, ReactNode, useState } from 'react';
import { PanResponderGestureState, Text, View } from 'react-native';
import Modal, { GestureResponderEvent } from 'react-native-modal';

const enum SWIPE_DIRECTION {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right'
}

const enum ANIMATIONS_IN {
  SLIDE_IN_UP = 'slideInUp',
  SLIDE_IN_DOWN = 'slideInDown'
}

const enum ANIMATIONS_OUT {
  SLIDE_OUT_UP = 'slideOutUp',
  SLIDE_OUT_DOWN = 'slideOutDown'
}

type Props = {
  animationIn?: ANIMATIONS_IN | {}
  animationInTiming?: number
  animationOut?: ANIMATIONS_OUT | {}
  animationOutTiming?: number
  avoidKeyboard?: boolean
  coverScreen?: boolean
  hasBackdrop?: boolean
  backdropColor?: string
  backdropOpacity?: number
  backdropTransitionInTiming?: number
  backdropTransitionOutTiming?: number
  customBackdrop?: ReactNode
  children: ReactNode
  deviceHeight?: number | null
  deviceWidth?: number | null
  isVisible: boolean
  onBackButtonPress?: () =>null
  onBackdropPress?: () => null
  onModalWillHide?: () => null
  onModalHide?: () => null
  onModalWillShow?: () => null
  onModalShow?: () => null
  onSwipeStart?: () => null
  onSwipeMove?: (percentageShown: number) => null
  onSwipeComplete?: () => null
  onSwipeCancel?: () => null
  panResponderThreshold?: number
  scrollOffset?: number
  scrollOffsetMax?: number
  scrollTo?: (e: any) => void | undefined
  scrollHorizontal?: boolean
  swipeThreshold?: number
  swipeDirection?: SWIPE_DIRECTION | SWIPE_DIRECTION[] | undefined
  useNativeDriver?: boolean
  useNativeDriverForBackdrop?: boolean | undefined
  hideModalContentWhileAnimating?: boolean
  propagateSwipe?: boolean | ((event: GestureResponderEvent, gestureState: PanResponderGestureState) => boolean) | undefined
  style?: any
}

const BaseModal: FC<Props> = ({
  animationIn = ANIMATIONS_IN.SLIDE_IN_UP,
  animationInTiming = 300,
  animationOut = ANIMATIONS_OUT.SLIDE_OUT_DOWN,
  animationOutTiming = 300,
  avoidKeyboard = false,
  coverScreen = true,
  hasBackdrop =true,
  backdropColor = 'black',
  backdropOpacity = 0.70,
  backdropTransitionInTiming = 300,
  backdropTransitionOutTiming = 300,
  customBackdrop = null,
  children,
  deviceHeight = null,
  deviceWidth = null,
  isVisible,
  onBackButtonPress = () => null,
  onBackdropPress = () => null,
  onModalWillHide = () => null,
  onModalHide = () => null,
  onModalWillShow = () => null, 
  onModalShow = () => null,
  onSwipeStart = () => null,
  onSwipeMove = (percentageShown) => null,
  onSwipeComplete = () => null,
  onSwipeCancel = () => null,
  panResponderThreshold = 4,
  scrollOffset = 0,
  scrollOffsetMax = 0,
  scrollTo = undefined,
  scrollHorizontal = false,
  swipeThreshold = 100,
  swipeDirection = undefined,
  useNativeDriver = false,
  useNativeDriverForBackdrop = undefined,
  hideModalContentWhileAnimating = false, 
  propagateSwipe = false,
  style = null
}: Props) => {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  return (
    <Modal 
      animationIn={animationIn}
      animationInTiming={animationInTiming}
      animationOut={animationOut}
      animationOutTiming={animationOutTiming}
      avoidKeyboard={avoidKeyboard}
      coverScreen={coverScreen}
      hasBackdrop={hasBackdrop}
      backdropColor={backdropColor}
      backdropOpacity={backdropOpacity}
      backdropTransitionInTiming={backdropTransitionInTiming}
      backdropTransitionOutTiming={backdropTransitionOutTiming}
      customBackdrop={customBackdrop}
      deviceHeight={deviceHeight}
      deviceWidth={deviceWidth}
      isVisible={isVisible}
      onBackButtonPress={onBackButtonPress}
      onBackdropPress={onBackdropPress}
      onModalWillHide={onModalWillHide}
      onModalHide={onModalHide}
      onModalWillShow={onModalWillShow}
      onModalShow={onModalShow}
      onSwipeStart={onSwipeStart}
      onSwipeMove={onSwipeMove}
      onSwipeComplete={onSwipeComplete}
      onSwipeCancel={onSwipeCancel}
      panResponderThreshold={panResponderThreshold}
      scrollOffset={scrollOffset}
      scrollOffsetMax={scrollOffsetMax}
      scrollTo={scrollTo}
      scrollHorizontal={scrollHorizontal}
      swipeThreshold={swipeThreshold}
      swipeDirection={swipeDirection}
      useNativeDriver={useNativeDriver}
      useNativeDriverForBackdrop={useNativeDriverForBackdrop}
      hideModalContentWhileAnimating={hideModalContentWhileAnimating}
      propagateSwipe={propagateSwipe}
      style={style}
    >
      <View>
        {children}
      </View>
    </Modal>
  )
}

export default BaseModal;