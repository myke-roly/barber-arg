import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '../../theme';

export interface ListItemIconProps {
  children: React.ReactNode;
}

export const ListItemIcon: React.FC<ListItemIconProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
