import React from 'react';
import { Text } from '../Text';
import { useButtonContext } from './Button';

export interface ButtonTextProps {
  children: string;
}

export const ButtonText: React.FC<ButtonTextProps> = ({ children }) => {
  const { variant } = useButtonContext();

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
      case 'secondary':
      case 'danger':
        return '#FFFFFF';
      case 'outline':
      case 'ghost':
        return undefined; // Inherit or default
      default:
        return undefined;
    }
  };

  return (
    <Text 
      variant="button" 
      color={getTextColor()} 
      weight="medium"
    >
      {children}
    </Text>
  );
};
