import React from 'react';
import { View, StyleSheet, ViewProps, KeyboardAvoidingView, Platform } from 'react-native';

export interface FormProps extends ViewProps {
  children: React.ReactNode;
  onSubmit?: () => void;
}

export const Form: React.FC<FormProps> = ({ children, onSubmit, style, ...props }) => {
  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={[styles.container, style]}
      {...props}
    >
      <View style={style}>{children}</View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
