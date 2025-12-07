import React from 'react';
import { View, StyleSheet } from 'react-native';
import { spacing } from '../../theme';

export interface ListItemActionProps {
  children?: React.ReactNode;
}

export const ListItemAction: React.FC<ListItemActionProps> = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
