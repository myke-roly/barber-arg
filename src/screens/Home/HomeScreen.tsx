import React, { useMemo } from 'react';
import { View, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Text, Button, BarbershopCard, BarbershopMap } from '../../components';
import { colors, spacing } from '../../theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../../navigation/types';
import { screen } from '../../utils/screen';
import { useLocation } from '../../hooks/useLocation';
import { barbershops } from '../../data/barbershops';
import { calculateDistance } from '../../utils/distance';
import { Ionicons } from '@expo/vector-icons';
import type { Barbershop } from '../../types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

type BarbershopWithDistance = Barbershop & { distance: number };

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { location, loading, error, permissionStatus, requestPermission } = useLocation();

  // Calculate distances and sort barbershops
  const sortedBarbershops = useMemo<Barbershop[] | BarbershopWithDistance[]>(() => {
    if (!location) return barbershops;

    return barbershops
      .map((barbershop): BarbershopWithDistance => ({
        ...barbershop,
        distance: calculateDistance(location, barbershop.coordinates),
      }))
      .sort((a, b) => a.distance - b.distance);
  }, [location]);

  console.log('permissionStatus', permissionStatus);

  // Loading state
  if (loading) {
    return (
      <View style={styles.centerContainer}>
        <ActivityIndicator size="large" color={colors.primary.main} />
        <Text variant="body" color={colors.text.secondary} style={styles.loadingText}>
          Obteniendo tu ubicación...
        </Text>
      </View>
    );
  }

  // Permission denied state
  if (permissionStatus === 'denied') {
    return (
      <View style={styles.centerContainer}>
        <Ionicons name="location-outline" size={64} color={colors.text.secondary} />
        <Text variant="heading2" style={styles.permissionTitle}>
          Ubicación Requerida
        </Text>
        <Text variant="body" color={colors.text.secondary} style={styles.permissionText}>
          Para mostrarte las peluquerías más cercanas, necesitamos acceso a tu ubicación.
        </Text>
        <Button variant="primary" onPress={requestPermission} style={styles.permissionButton}>
          <Button.Icon name="location" />
          <Button.Text>Activar Ubicación</Button.Text>
        </Button>
      </View>
    );
  }

  // Error state
  if (error && !location) {
    return (
      <View style={styles.centerContainer}>
        <Ionicons name="alert-circle-outline" size={64} color={colors.error.main} />
        <Text variant="heading2" style={styles.permissionTitle}>
          Error
        </Text>
        <Text variant="body" color={colors.text.secondary} style={styles.permissionText}>
          {error}
        </Text>
        <Button variant="primary" onPress={requestPermission} style={styles.permissionButton}>
          <Button.Text>Reintentar</Button.Text>
        </Button>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text variant="heading1">Peluquerías Cercanas</Text>
        <Text variant="body" color={colors.text.secondary}>
          {location
            ? 'Ordenadas por distancia desde tu ubicación'
            : 'Mostrando todas las peluquerías'}
        </Text>
      </View>

      {/* Map showing nearby barbershops */}
      {location && (
        <BarbershopMap
          userLocation={location}
          barbershops={sortedBarbershops}
          maxBarbershops={5}
          onMarkerPress={(barbershop) => console.log('Marker pressed:', barbershop.name)}
        />
      )}

      <View style={styles.listContainer}>
        {sortedBarbershops.map((barbershop) => (
          <BarbershopCard
            key={barbershop.id}
            barbershop={barbershop}
            distance={'distance' in barbershop ? barbershop.distance : undefined}
            onPress={() => console.log('Selected:', barbershop.name)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  content: {
    padding: spacing.lg,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: colors.background.default,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  header: {
    marginBottom: spacing.lg,
  },
  listContainer: {
    paddingBottom: spacing.xl,
  },
  loadingText: {
    marginTop: spacing.md,
  },
  permissionTitle: {
    marginTop: spacing.lg,
    marginBottom: spacing.sm,
    textAlign: 'center',
  },
  permissionText: {
    textAlign: 'center',
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.md,
  },
  permissionButton: {
    minWidth: 200,
  },
});

export default screen(HomeScreen);
