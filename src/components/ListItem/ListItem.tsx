import React from 'react';
import { Pressable, StyleSheet, View, ViewStyle, PressableProps } from 'react-native';
import { colors, spacing, layout } from '../../theme';
import { ListItemIcon } from './ListItem.Icon';
import { ListItemText } from './ListItem.Text';
import { ListItemAction } from './ListItem.Action';

export interface ListItemProps extends PressableProps {
  children: React.ReactNode;
  divider?: boolean;
  style?: ViewStyle;
}

const ListItemRoot: React.FC<ListItemProps> = ({ 
  children, 
  divider, 
  onPress, 
  style,
  ...props 
}) => {
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
});

export const ListItem = Object.assign(ListItemRoot, {
  Icon: ListItemIcon,
  Text: ListItemText,
  Action: ListItemAction,
});
