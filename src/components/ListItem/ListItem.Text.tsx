import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../Text';

export interface ListItemTextProps {
  title: string;
  subtitle?: string;
}

export const ListItemText: React.FC<ListItemTextProps> = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text variant="body" weight="medium">{title}</Text>
      {subtitle && (
        <Text variant="caption" style={styles.subtitle}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  subtitle: {
    marginTop: 2,
  },
});
