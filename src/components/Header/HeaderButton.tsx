import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { Text } from '../Text';
import { colors, spacing } from '../../theme';

export type HeaderButtonIcon = 'back' | 'close' | 'help' | 'notifications' | 'menu';

export interface HeaderButtonProps {
  icon?: HeaderButtonIcon;
  onPress: () => void;
  children?: React.ReactNode;
}

const iconMap: Record<HeaderButtonIcon, string> = {
  back: '←',
  close: '✕',
  help: '?',
  notifications: '🔔',
  menu: '☰',
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
      {children || (
        <Text variant="heading3" style={styles.icon}>
          {icon ? iconMap[icon] : ''}
        </Text>
      )}
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
