import React from 'react';
import { colors } from '../../theme';
import { Field } from '../Field';
import { FieldInput } from '../Field/Field.Input';

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
      <FieldInput
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
