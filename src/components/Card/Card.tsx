import React from 'react';
import { View, StyleSheet, ViewStyle, Pressable, PressableProps } from 'react-native';
import { colors, layout, spacing } from '../../theme';
import { CardHeader } from './Card.Header';
import { CardBody } from './Card.Body';
import { CardFooter } from './Card.Footer';

export type CardVariant = 'elevated' | 'outlined' | 'flat';

export interface CardProps extends PressableProps {
  children: React.ReactNode;
  variant?: CardVariant;
  style?: ViewStyle;
  onPress?: () => void;
}

const CardRoot: React.FC<CardProps> = ({ 
  children, 
  variant = 'elevated', 
  style,
  onPress,
  ...props 
}) => {
  const Container = onPress ? Pressable : View;
  
  return (
    // @ts-ignore
    <Container 
      style={({ pressed }: { pressed: boolean }) => [
        styles.base,
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
};

const styles = StyleSheet.create({
  base: {
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
});

export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
