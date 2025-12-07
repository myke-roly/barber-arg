import React, { useState } from 'react';
import { TextInput, TextInputProps, StyleSheet, View } from 'react-native';
import { colors, layout, spacing, typography } from '../../theme';
import { useFieldContext } from './Field';

export interface FieldInputProps extends TextInputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'phone';
}

export const FieldInput: React.FC<FieldInputProps> = ({ 
  type = 'text', 
  style, 
  onFocus,
  onBlur,
  ...props 
}) => {
  const { error } = useFieldContext();
  const [isFocused, setIsFocused] = useState(false);

  const getKeyboardType = () => {
    switch (type) {
      case 'email': return 'email-address';
      case 'number': return 'numeric';
      case 'phone': return 'phone-pad';
      default: return 'default';
    }
  };

  const handleFocus = (e: any) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  return (
    <TextInput
      style={[
        styles.input,
        isFocused && styles.focused,
        !!error && styles.error,
        style
      ]}
      secureTextEntry={type === 'password'}
      keyboardType={getKeyboardType()}
      placeholderTextColor={colors.neutral.gray400}
      onFocus={handleFocus}
      onBlur={handleBlur}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: layout.inputHeight,
    borderWidth: 1,
    borderColor: colors.neutral.gray300,
    borderRadius: layout.borderRadius.md,
    paddingHorizontal: spacing.md,
    fontSize: typography.sizes.md,
    color: colors.text.primary,
    backgroundColor: colors.background.paper,
  },
  focused: {
    borderColor: colors.primary.main,
    borderWidth: 2, // Highlight focus
  },
  error: {
    borderColor: colors.error.main,
  },
});
