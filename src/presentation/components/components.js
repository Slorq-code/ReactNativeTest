import React from 'react';
import  styles  from '../../theme/generalStyle';
import { Text as RNText, TextInput as RNTextInput, Button as RNButton, StyleSheet } from 'react-native';


export const Text = ({ style, children, ...props }) => {
  return (
    <RNText style={[styles.text, style]} {...props}>
      {children}
    </RNText>
  );
};


export const TextInput = ({ style, ...props }) => {
  return (
    <RNTextInput style={[styles.input, style]} {...props} />
  );
};


export const Button = ({ title, onPress, style, ...props }) => {
  return (
    <RNButton title={title} onPress={onPress} {...props} />
  );
};