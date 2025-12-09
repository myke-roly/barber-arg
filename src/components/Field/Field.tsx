import React, { createContext, useContext, ReactNode, useState } from 'react';
import { View, StyleSheet, ViewStyle, TextInput, TextInputProps } from 'react-native';
import { colors, layout, spacing, typography } from '../../theme';
import { Text } from '../Text';

interface FieldContextType {
  error?: string;
}

const FieldContext = createContext<FieldContextType>({});

export const useFieldContext = () => useContext(FieldContext);

export interface FieldProps {
  children: ReactNode;
  error?: string;
  style?: ViewStyle;
}

export function Field({ children, error, style }: FieldProps) {
  return (
    <FieldContext.Provider value={{ error }}>
      <View style={[styles.field, style]}>
        {children}
      </View>
    </FieldContext.Provider>
  );
}

export interface FieldLabelProps {
  children: string;
  required?: boolean;
}

Field.Label = function FieldLabel({ children, required }: FieldLabelProps) {
  return (
    <View style={styles.labelContainer}>
      <Text variant="label" style={styles.labelText}>
        {children}
      </Text>
      {required && <Text variant="label" color={colors.error.main}> *</Text>}
    </View>
  );
};

export interface FieldInputProps extends TextInputProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'phone';
}

Field.Input = function FieldInput({ 
  type = 'text', 
  style, 
  onFocus,
  onBlur,
  ...props 
}: FieldInputProps) {
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
        isFocused && styles.inputFocused,
        !!error && styles.inputError,
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

export interface FieldErrorProps {
  children?: string; // Optional because we might pull from context if available
}

Field.Error = function FieldError({ children }: FieldErrorProps) {
  const { error } = useFieldContext();
  const errorMessage = children || error;

  if (!errorMessage) return null;

  return (
    <Text variant="caption" color={colors.error.main} style={styles.errorText}>
      {errorMessage}
    </Text>
  );
};

const styles = StyleSheet.create({
  field: {
    marginBottom: spacing.lg,
  },
  labelContainer: {
    flexDirection: 'row',
    marginBottom: spacing.xs,
  },
  labelText: {
    color: colors.neutral.gray700,
  },
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
  inputFocused: {
    borderColor: colors.primary.main,
    borderWidth: 2,
  },
  inputError: {
    borderColor: colors.error.main,
  },
  errorText: {
    marginTop: spacing.xs,
  },
});
