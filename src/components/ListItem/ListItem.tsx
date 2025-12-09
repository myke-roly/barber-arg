import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle, PressableProps } from 'react-native';
import { colors, spacing, layout } from '../../theme';
import { Text } from '../Text';

export interface ListItemProps extends PressableProps {
  children: React.ReactNode;
  divider?: boolean;
  style?: ViewStyle;
}

export function ListItem({ 
  children, 
  divider, 
  onPress, 
  style,
  ...props 
}: ListItemProps) {
  const Container = onPress ? Pressable : View;

  return (
    // @ts-ignore
    <Container
      style={({ pressed }: { pressed: boolean }) => [
        styles.container,
        divider && styles.divider,
        onPress && pressed && styles.pressed,
        style,
      ]}
      onPress={onPress}
      {...props}
    >
      {children}
    </Container>
  );
}

export interface ListItemIconProps {
  children: React.ReactNode;
}

ListItem.Icon = function ListItemIcon({ children }: ListItemIconProps) {
  return (
    <View style={styles.iconContainer}>
      {children}
    </View>
  );
};

export interface ListItemTextProps {
  title: string;
  subtitle?: string;
}

ListItem.Text = function ListItemText({ title, subtitle }: ListItemTextProps) {
  return (
    <View style={styles.textContainer}>
      <Text variant="body" weight="medium">{title}</Text>
      {subtitle && (
        <Text variant="caption" style={styles.subtitle}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export interface ListItemActionProps {
  children?: React.ReactNode;
}

ListItem.Action = function ListItemAction({ children }: ListItemActionProps) {
  return (
    <View style={styles.actionContainer}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    backgroundColor: colors.background.paper,
    minHeight: layout.buttonHeight.medium,
    borderRadius: layout.borderRadius.md,
  },
  divider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.neutral.gray200,
  },
  pressed: {
    backgroundColor: colors.neutral.gray50,
  },
  iconContainer: {
    marginRight: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  subtitle: {
    marginTop: 2,
  },
  actionContainer: {
    marginLeft: spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
