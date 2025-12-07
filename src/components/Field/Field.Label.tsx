import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from '../Text';
import { colors, spacing } from '../../theme';

export interface FieldLabelProps {
  children: string;
  required?: boolean;
}

export const FieldLabel: React.FC<FieldLabelProps> = ({ children, required }) => {
  return (
    <View style={styles.container}>
      <Text variant="label" style={styles.text}>
        {children}
      </Text>
      {required && <Text variant="label" color={colors.error.main}> *</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  text: {
    color: colors.neutral.gray700,
  },
});
