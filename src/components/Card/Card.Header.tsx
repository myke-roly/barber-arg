import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from '../Text';
import { spacing } from '../../theme';

export interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title, subtitle, action }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text variant="heading3">{title}</Text>
        {subtitle && (
          <Text variant="caption" style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>
      {action && <View style={styles.action}>{action}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  subtitle: {
    marginTop: 2,
  },
  action: {
    marginLeft: spacing.md,
  },
});
