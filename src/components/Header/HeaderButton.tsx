import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { colors } from '../../theme';
import { Ionicons } from '@expo/vector-icons';


export interface HeaderButtonProps {
  icon?: 'back' | 'close' | 'chat' | 'notifications' | 'menu';
  onPress: () => void;
  children?: React.ReactNode;
}

const iconMap: {[key: string]: any} = {
  back: 'arrow-back',
  close: 'close',
  chat: 'chatbox-outline',
  notifications: 'notifications',
  menu: 'menu',
};

export const HeaderButton: React.FC<HeaderButtonProps> = ({ icon, onPress, children }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      {children || 
        icon && (<Ionicons name={iconMap[icon]} size={20} color={colors.primary.main} />)
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  pressed: {
    backgroundColor: colors.neutral.gray100,
  },
  icon: {
    color: colors.primary.main,
  },
});
