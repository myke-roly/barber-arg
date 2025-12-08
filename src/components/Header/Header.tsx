import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text } from '../Text';
import { colors, spacing } from '../../theme';

export interface HeaderProps {
  title?: string;
  leftButtons?: React.ReactNode[];
  rightButtons?: React.ReactNode[];
  backgroundColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  leftButtons = [],
  rightButtons = [],
  backgroundColor = colors.background.paper,
}) => {
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
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    minWidth: 88, // Space for 2 buttons
  },
  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.sm,
  },
});
