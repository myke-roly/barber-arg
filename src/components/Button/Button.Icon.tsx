import React from 'react';
import { View } from 'react-native';
// You might want to install @expo/vector-icons if not available, but I'll assume usage of some icon library or placeholder.
// For now, I'll use a placeholder View or assume the user will pass an Icon component source
// Actually, let's use a Text placeholder or require an external setup.
// To make it robust, I will accept a render prop or a simple component.
// But usually in React Native we use libraries like Feather or Ionicons.
// Let's assume standardized Usage with a 'name' prop is difficult without a known library.
// I'll make it generic or use a render prop approach or simple View wrapper.

import { useButtonContext } from './Button';
import { Text } from '../Text'; 

// NOTE: Ideally we would use @expo/vector-icons here.
// I will implement a placeholder that can be easily swapped.

export interface ButtonIconProps {
  // If we had a specific icon library:
  // name: IconName; 
  children?: React.ReactNode;
  position?: 'left' | 'right';
}

export const ButtonIcon: React.FC<ButtonIconProps> = ({ children }) => {
  const { variant } = useButtonContext();
  
  // Logic to color the icon could go here if we were cloning the element
  
  return (
    <View>
      {children}
    </View>
  );
};
