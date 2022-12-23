import { FC } from 'react';
import { Text, StyleSheet, TextProps, TextStyle } from 'react-native';

type Props = {
  type: 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'caption'
  children: string
  styles?: TextStyle
  textProps?: TextProps
  wordCount?: number | undefined
  endText?: string |undefined,
  adjustsFontSizeToFit?: boolean
  allowFontScaling?: boolean,
  androidDataDetectorType?: 'phoneNumber' | 'email' | 'none' | 'all'
  androidDisabled?: boolean
  numberOfLines?: number
  ellipsizeMode?: 'head' | 'middle' | 'tail' | 'clip'
  onLongPress?: (event: any) => void
  onPress?: (event: any) => void
  onResponderGrant?: (event: any) => void
  selectable?: boolean
  androidSelectionColor?: string
}

const BaseTypography: FC<Props> = ({
  type,
  children,
  styles = {
    color: 'black',
    fontSize: undefined,
    lineHeight: undefined,
    letterSpacing: undefined,
    fontWeight: undefined,
    fontStyle: 'normal',
  },
  textProps = undefined,
  wordCount = undefined, 
  endText = undefined
}) => {

  const limitedWordCount = (wordLimit: number, endText?: string) => {
    let words = children.toString().split(' ').slice(0, wordLimit).join(' ');
    if (endText) words = `${words} ${endText}`;
    return words;
  }

  return (
    <Text 
      style={[
        baseStyles.standard, 
        styles,
        baseStyles[`${type}`]
      ]}
      { ...textProps }
      // accessibilityLabel={children.toString()}
    >{wordCount ? limitedWordCount(wordCount, endText) : children}</Text>
  )
}

export default BaseTypography;

const baseStyles = StyleSheet.create({
  standard: {
    // backgroundColor: 'red'
  },
  display: {
    fontSize: 30,
    fontWeight: '900'
  },
  h1: {
    fontSize: 28,
    fontWeight: '800' 
  },
  h2: {
    fontSize: 26,
    fontWeight: '700' 
  },
  h3: {
    fontSize: 24,
    fontWeight: '600' 
  },
  h4: {
    fontSize: 22,
    fontWeight: '500' 
  },
  h5: {
    fontSize: 20,
    fontWeight: '400' 
  },
  h6: {
    fontSize: 18,
    fontWeight: '400' 
  },
  p: {
    fontSize: 16,
    fontWeight: '400' 
  },
  caption: {
    fontSize: 14,
    fontWeight: '300'
  },
});