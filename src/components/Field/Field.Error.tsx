import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from '../Text';
import { colors, spacing } from '../../theme';
import { useFieldContext } from './Field';

export interface FieldErrorProps {
  children?: string; // Optional because we might pull from context if available
}

export const FieldError: React.FC<FieldErrorProps> = ({ children }) => {
  const { error } = useFieldContext();
  const errorMessage = children || error;

  if (!errorMessage) return null;

  return (
    <Text variant="caption" color={colors.error.main} style={styles.text}>
      {errorMessage}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    marginTop: spacing.xs,
  },
});
