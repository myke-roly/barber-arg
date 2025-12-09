import React from 'react';
import { colors } from '../../theme';
import { Field } from '../Field';

export interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = 'Buscar peluquerías...',
}) => {
  return (
    <Field>
      <Field.Input
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.neutral.gray400}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </Field>
  );
};
