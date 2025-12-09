import React from 'react';
import { View, StyleSheet, ViewStyle, Pressable, PressableProps, Image, ImageSourcePropType, ViewProps, ImageStyle } from 'react-native';
import { colors, layout, spacing } from '../../theme';
import { Text } from '../Text';

export type CardVariant = 'elevated' | 'outlined' | 'flat';

export interface CardProps extends PressableProps {
  children: React.ReactNode;
  variant?: CardVariant;
  style?: ViewStyle;
  onPress?: () => void;
}

export function Card({ 
  children, 
  variant = 'elevated', 
  style, 
  onPress, 
  ...props 
}: CardProps) {
  const Container = onPress ? Pressable : View;

  return (
    // @ts-ignore
    <Container 
      style={({ pressed }: { pressed: boolean }) => [
        styles.card,
        styles[variant],
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

export interface CardHeaderProps {
  title: string;
  subtitle?: string;
  action?: React.ReactNode;
}

Card.Header = function CardHeader({ title, subtitle, action }: CardHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <Text variant="heading3">{title}</Text>
        {subtitle && (
          <Text variant="caption" style={styles.subtitle}>
            {subtitle}
          </Text>
        )}
      </View>
      {action && <View style={styles.action}>{action}</View>}
    </View>
  );
};

export interface CardMediaProps {
  source: ImageSourcePropType;
  style?: ImageStyle;
}

Card.Media = function CardMedia({ source, style }: CardMediaProps) {
  return <Image source={source} style={[styles.media, style]} />;
};

export interface CardContentProps extends ViewProps {
  children: React.ReactNode;
}

Card.Content = function CardContent({ children, style, ...props }: CardContentProps) {
  return (
    <View style={[styles.content, style]} {...props}>
      {children}
    </View>
  );
};

export interface CardActionsProps extends ViewProps {
  children: React.ReactNode;
}

Card.Actions = function CardActions({ children, style, ...props }: CardActionsProps) {
  return (
    <View style={[styles.actions, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background.paper,
    borderRadius: layout.borderRadius.md,
    overflow: 'hidden',
    marginVertical: spacing.sm,
  },
  elevated: {
    shadowColor: colors.neutral.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  outlined: {
    borderWidth: 1,
    borderColor: colors.border,
  },
  flat: {
    backgroundColor: 'transparent',
  },
  pressed: {
    opacity: 0.95,
  },
  header: {
    padding: spacing.md,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTextContainer: {
    flex: 1,
  },
  subtitle: {
    marginTop: 2,
    color: colors.text.secondary,
  },
  action: {
    marginLeft: spacing.md,
  },
  media: {
    width: '100%',
    height: 160,
  },
  content: {
    padding: spacing.md,
  },
  actions: {
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.neutral.gray100,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: spacing.sm,
  },
});
