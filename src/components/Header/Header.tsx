import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '../Text';
import { colors, spacing } from '../../theme';
import { Ionicons } from '@expo/vector-icons';

export interface HeaderProps {
  title?: string;
  leftButtons?: React.ReactNode[];
  rightButtons?: React.ReactNode[];
  backgroundColor?: string;
  children?: React.ReactNode; // Allow children to customize internal layout if needed
}

export function Header({
  title,
  leftButtons = [],
  rightButtons = [],
  backgroundColor = colors.background.paper,
  children,
}: HeaderProps) {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { backgroundColor, paddingTop: insets.top }]}>
      <View style={styles.content}>
        {/* Left Section */}
        <View style={styles.section}>
          {leftButtons.map((button, index) => (
            <View key={`left-${index}`}>{button}</View>
          ))}
        </View>

        {/* Center Title */}
        <View style={styles.titleContainer}>
          {title && (
            <Text variant="body" numberOfLines={1}>
              {title}
            </Text>
          )}
          {children}
        </View>

        {/* Right Section */}
        <View style={styles.section}>
          {rightButtons.map((button, index) => (
            <View key={`right-${index}`}>{button}</View>
          ))}
        </View>
      </View>
    </View>
  );
}

const iconMap: {[key: string]: any} = {
  back: 'arrow-back',
  close: 'close',
  chat: 'chatbox-outline',
  notifications: 'notifications',
  menu: 'menu',
};

export interface HeaderButtonProps {
  icon?: 'back' | 'close' | 'chat' | 'notifications' | 'menu';
  onPress: () => void;
  children?: React.ReactNode;
}

Header.Button = function HeaderButton({ icon, onPress, children }: HeaderButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
    >
      {children || 
        (icon && <Ionicons name={iconMap[icon]} size={20} color={colors.primary.main} />)
      }
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.neutral.gray200,
    shadowColor: colors.neutral.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.md,
    height: 44, // Explicit height for navbar content
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 44,
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.sm,
  },
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
});
