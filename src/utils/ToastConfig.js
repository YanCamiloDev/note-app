import * as React from 'react';
import { Text, View } from 'react-native';
import { BaseToast, ErrorToast } from 'react-native-toast-message';

export const toastConfig = {

  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'blue' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  ),

  err: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: '#EF5B30' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  )
};