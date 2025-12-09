import React, { createContext, useContext, ReactNode, ComponentProps } from 'react';
import { Pressable, StyleSheet, PressableProps, ViewStyle } from 'react-native';
import { colors, layout, spacing } from '../../theme';
import { Text } from '../Text';
import { Ionicons } from '@expo/vector-icons';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'small' | 'medium' | 'large';

interface ButtonContextType {
  variant: ButtonVariant;
  size: ButtonSize;
  disabled?: boolean;
}

const ButtonContext = createContext<ButtonContextType | undefined>(undefined);

export const useButtonContext = () => {
  const context = useContext(ButtonContext);
  if (!context) {
    throw new Error('Button.Text and Button.Icon must be used within a Button');
  }
  return context;
};

export interface ButtonProps extends PressableProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  style?: ViewStyle;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = 'primary',
  size = 'medium',
  disabled,
  style,
  fullWidth,
  ...props
}: ButtonProps) {
  return (
    <ButtonContext.Provider value={{ variant, size, disabled: !!disabled }}>
      <Pressable
        style={({ pressed }) => [
          styles.base,
          styles[size],
          styles[variant],
          pressed && styles.pressed,
          pressed && variant === 'primary' && styles.primaryPressed,
          pressed && variant === 'secondary' && styles.secondaryPressed,
          pressed && variant === 'outline' && styles.outlinePressed,
          pressed && variant === 'ghost' && styles.ghostPressed,
          pressed && variant === 'danger' && styles.dangerPressed,
          disabled && styles.disabled,
          style,
          fullWidth && styles.fullWidth,
        ]}
        disabled={disabled}
        {...props}
      >
        {children}
      </Pressable>
    </ButtonContext.Provider>
  );
}

export interface ButtonTextProps {
  children: string;
}

Button.Text = function ButtonText({ children }: ButtonTextProps) {
  const { variant } = useButtonContext();

  const getTextColor = () => {
    switch (variant) {
      case 'primary':
      case 'secondary':
      case 'danger':
        return '#FFFFFF';
      case 'outline':
      case 'ghost':
        return undefined; // Inherit or default
      default:
        return undefined;
    }
  };

  return (
    <Text 
      variant="button" 
      color={getTextColor()} 
      weight="medium"
    >
      {children}
    </Text>
  );
};

export interface ButtonIconProps {
  name: ComponentProps<typeof Ionicons>['name'];
  size?: number;
  position?: 'left' | 'right';
}

Button.Icon = function ButtonIcon({ name, size = 20 }: ButtonIconProps) {
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

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: layout.borderRadius.md,
    gap: spacing.sm,
  },
  fullWidth: {
    width: '100%',
  },
  // Sizes
  small: {
    height: layout.buttonHeight.small,
    paddingHorizontal: spacing.md,
  },
  medium: {
    height: layout.buttonHeight.medium,
    paddingHorizontal: spacing.lg,
  },
  large: {
    height: layout.buttonHeight.large,
    paddingHorizontal: spacing.xl,
  },
  // Variants
  primary: {
    backgroundColor: colors.primary.main,
  },
  secondary: {
    backgroundColor: colors.secondary.main,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.primary.main,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  danger: {
    backgroundColor: colors.error.main,
  },
  // Pressed States
  pressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  primaryPressed: {
    backgroundColor: colors.primary.dark,
  },
  secondaryPressed: {
    backgroundColor: colors.secondary.dark,
  },
  outlinePressed: {
    backgroundColor: colors.primary.main + '10', // 10% opacity
  },
  ghostPressed: {
    backgroundColor: colors.neutral.gray100,
  },
  dangerPressed: {
    backgroundColor: colors.error.dark,
  },
  disabled: {
    opacity: 0.5,
    backgroundColor: colors.neutral.gray300,
  },
});
