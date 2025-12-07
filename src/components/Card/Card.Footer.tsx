import React from 'react';
import { View, StyleSheet, ViewProps } from 'react-native';
import { spacing, colors } from '../../theme';

export interface CardFooterProps extends ViewProps {
  children: React.ReactNode;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, style, ...props }) => {
  return (
    <View style={[styles.container, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.neutral.gray100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.sm,
  },
});
