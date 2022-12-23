/**
 * Base Toast
 * Foundational Library: react-native-toast-message ('https://www.npmjs.com/package/react-native-toast-message')
 * Author: Bubuka Sharif
 * Date: 23rd December 2022 11:20PM
 * Last Edited: 23rd December 2022 11:20PM
 */

import { BaseIcon, ICON_NAMES } from 'components/Icon';
import { BaseTypography } from 'components/Typography';
import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { ToastConfigParams, ToastConfig as ToastConfigType } from 'react-native-toast-message';

export enum TOAST_TYPES {
  SUCCESS = 'success',
  ERROR = 'error',
  WARNING = 'warning', 
  INFO = 'info'
}

const getIconFromToastType = (toastType: string): ICON_NAMES | undefined  => {
  switch (toastType) {
    case 'success': return ICON_NAMES.SUCCESS
    case 'warning': return ICON_NAMES.WARN
    case 'error': return ICON_NAMES.ERROR
    case 'info': return ICON_NAMES.INFO
    default: return undefined
  }
}

type BaseToastProps = {
  type: string,
  text1: string | undefined,
  text2: string | undefined
}

const BaseToast: FC<BaseToastProps> = ({ type, text1, text2 }) => {
  if (text1 && text2) {
    return (
      <View style={[styles.container]}>
        <View style={[styles.left]}>
          <BaseIcon name={getIconFromToastType(type)} color='white' size={25} />
        </View>
        <View style={[styles.right]}>
          <BaseTypography styles={styles.heading} type='h6'>{text1}</BaseTypography>
          <BaseTypography styles={styles.info} type='caption'>{text2}</BaseTypography>
        </View>
      </View>
    )
  } else {
    return (<></>)
  }
}

export const ToastConfig: ToastConfigType = {
  success: (props: ToastConfigParams<any>) => {
    return (
      <BaseToast type={props.type} text1={props.text1} text2={props.text2} />
    )
  },

  warning: (props: ToastConfigParams<any>) => {
    return (
      <BaseToast type={props.type} text1={props.text1} text2={props.text2} />
    )
  },

  error: (props: ToastConfigParams<any>) => {
    return (
      <BaseToast type={props.type} text1={props.text1} text2={props.text2} />
    )
  },

  info: (props: ToastConfigParams<any>) => {
    return (
      <BaseToast type={props.type} text1={props.text1} text2={props.text2} />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#DEEDCF',
    width: '90%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    shadowColor: "#DEEDCF",
    shadowOffset: {
	  width: 0,
	  height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24
  },
  left: {
    padding: 0,
    backgroundColor: '#39A96B',
    borderRadius: 5,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15
  },
  right: {
    flex: 1,
    // backgroundColor: 'red',
  },
  heading: {
    color: '#39A96B',
  },
  info: {
  }
});
