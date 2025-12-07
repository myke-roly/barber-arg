import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { spacing } from '../../theme';

export interface CardBodyProps extends ViewProps {
  children: React.ReactNode;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
});
