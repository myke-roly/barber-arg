import React from 'react';
import { Text as RNText, TextProps as RNTextProps, StyleSheet, TextStyle } from 'react-native';
import { colors, typography } from '../../theme';

export type TextVariant = 
  | 'heading1' 
  | 'heading2' 
  | 'heading3' 
  | 'body' 
  | 'caption' 
  | 'label'
  | 'button';

export interface TextProps extends RNTextProps {
  variant?: TextVariant;
  color?: string;
  weight?: 'regular' | 'medium' | 'bold';
  align?: TextStyle['textAlign'];
}

export const Text: React.FC<TextProps> = ({ 
  children, 
  variant = 'body', 
  color, 
  weight,
  align = 'left',
  style, 
  ...props 
}) => {
  const getVariantStyle = (): TextStyle => {
    switch (variant) {
      case 'heading1':
        return {
          fontSize: typography.sizes.xxl,
          lineHeight: typography.lineHeights.xxl,
          fontWeight: typography.weights.bold,
          color: colors.text.primary,
        };
      case 'heading2':
        return {
          fontSize: typography.sizes.xl,
          lineHeight: typography.lineHeights.xl,
          fontWeight: typography.weights.bold,
          color: colors.text.primary,
        };
      case 'heading3':
        return {
          fontSize: typography.sizes.lg,
          lineHeight: typography.lineHeights.lg,
          fontWeight: typography.weights.medium,
          color: colors.text.primary,
        };
      case 'body':
        return {
          fontSize: typography.sizes.md,
          lineHeight: typography.lineHeights.md,
          fontWeight: typography.weights.regular,
          color: colors.text.primary,
        };
      case 'caption':
        return {
          fontSize: typography.sizes.xs,
          lineHeight: typography.lineHeights.xs,
          fontWeight: typography.weights.regular,
          color: colors.text.secondary,
        };
      case 'label':
        return {
          fontSize: typography.sizes.sm,
          lineHeight: typography.lineHeights.sm,
          fontWeight: typography.weights.medium,
          color: colors.text.secondary,
        };
        case 'button':
        return {
          fontSize: typography.sizes.md,
          lineHeight: typography.lineHeights.md,
          fontWeight: typography.weights.medium,
          color: colors.text.primary,
        };
      default:
        return {};
    }
  };

  const textStyle: TextStyle = {
    ...getVariantStyle(),
    ...(color && { color }),
    ...(weight && { fontWeight: typography.weights[weight] }),
    textAlign: align,
  };

  return (
    <RNText style={[textStyle, style]} {...props}>
      {children}
    </RNText>
  );
};
