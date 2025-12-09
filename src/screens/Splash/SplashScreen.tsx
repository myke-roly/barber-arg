import React, { useCallback } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Splash from 'expo-splash-screen';
import { colors, spacing, typography } from '../../theme';
import { Text } from '../../components';

export const SplashScreen: React.FC = () => {
  const onLayout = useCallback(async () => {
    // Hide native splash screen once our custom one is rendered
    await Splash.hideAsync();
  }, []);

  return (
    <View style={styles.container} onLayout={onLayout}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Ionicons name="cut" size={80} color={colors.background.paper} />
        </View>
        <Text
          variant="heading1"
          style={styles.title}
          color={colors.primary.main}
        >
          BarberArg
        </Text>
        <Text
          variant="body"
          color={colors.text.secondary}
          style={styles.subtitle}
        >
          Tu estilo, tu turno.
        </Text>
        
        <ActivityIndicator 
          size="small" 
          color={colors.primary.main} 
          style={styles.loader} 
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.paper,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: colors.primary.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.lg,
    shadowColor: colors.primary.main,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  title: {
    fontSize: 40,
    marginBottom: spacing.xs,
  },
  subtitle: {
    marginBottom: spacing.xxl,
  },
  loader: {
    marginTop: spacing.xl,
  },
});
