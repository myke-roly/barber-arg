import React, { createContext, useContext, ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { spacing } from '../../theme';

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

const FieldRoot: React.FC<FieldProps> = ({ children, error, style }) => {
  return (
    <FieldContext.Provider value={{ error }}>
      <View style={[styles.container, style]}>
        {children}
      </View>
    </FieldContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
});

export { FieldRoot as Field };
