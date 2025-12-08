import React, { ComponentProps } from 'react';
import { useButtonContext } from './Button';
import { Ionicons } from '@expo/vector-icons';

// Using @expo/vector-icons (Ionicons)
// See available icons at: https://icons.expo.fyi/Index

export interface ButtonIconProps {
  name: ComponentProps<typeof Ionicons>['name'];
  size?: number;
  position?: 'left' | 'right';
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({ 
  name, 
  size = 20,
}) => {
  const { variant } = useButtonContext();
  
  // Determine icon color based on button variant
  const getIconColor = () => {
    switch (variant) {
      case 'primary':
      case 'secondary':
      case 'danger':
        return '#FFFFFF';
      case 'outline':
      case 'ghost':
        return undefined; // Use default color
      default:
        return undefined;
    }
  };
  
  return (
    <Ionicons
      name={name} 
      size={size} 
      color={getIconColor()} 
    />
  );
};
