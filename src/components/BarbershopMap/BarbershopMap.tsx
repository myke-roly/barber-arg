import React, { useMemo } from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, Callout, PROVIDER_DEFAULT, Region } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../../theme';
import { Barbershop, Location } from '../../types';
import { Text } from '../Text';

export interface BarbershopMapProps {
  userLocation: Location;
  barbershops: Array<Barbershop & { distance?: number }>;
  onMarkerPress?: (barbershop: Barbershop) => void;
  maxBarbershops?: number;
}

export const BarbershopMap: React.FC<BarbershopMapProps> = ({
  userLocation,
  barbershops,
  onMarkerPress,
  maxBarbershops = 5,
}) => {
  // Calculate region to show user location and nearby barbershops
  const region = useMemo<Region>(() => {
    const nearbyBarbershops = barbershops.slice(0, maxBarbershops);
    
    if (nearbyBarbershops.length === 0) {
      return {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      };
    }

    // Calculate bounds to fit all markers
    const latitudes = [
      userLocation.latitude,
      ...nearbyBarbershops.map(b => b.coordinates.latitude),
    ];
    const longitudes = [
      userLocation.longitude,
      ...nearbyBarbershops.map(b => b.coordinates.longitude),
    ];

    const minLat = Math.min(...latitudes);
    const maxLat = Math.max(...latitudes);
    const minLng = Math.min(...longitudes);
    const maxLng = Math.max(...longitudes);

    const centerLat = (minLat + maxLat) / 2;
    const centerLng = (minLng + maxLng) / 2;
    const latDelta = (maxLat - minLat) * 1.5; // Add 50% padding
    const lngDelta = (maxLng - minLng) * 1.5;

    return {
      latitude: centerLat,
      longitude: centerLng,
      latitudeDelta: Math.max(latDelta, 0.02), // Minimum zoom level
      longitudeDelta: Math.max(lngDelta, 0.02),
    };
  }, [userLocation, barbershops, maxBarbershops]);

  const nearbyBarbershops = barbershops.slice(0, maxBarbershops);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_DEFAULT}
        style={styles.map}
        initialRegion={region}
        showsUserLocation
        showsMyLocationButton
        showsCompass
      >
        {/* Barbershop markers */}
        {nearbyBarbershops.map((barbershop) => (
          <Marker
            key={barbershop.id}
            coordinate={barbershop.coordinates}
            onPress={() => onMarkerPress?.(barbershop)}
          >
            <View style={styles.markerContainer}>
              <View style={styles.marker}>
                <Ionicons name="cut" size={20} color={colors.background.paper} />
              </View>
            </View>
            <Callout>
              <View style={styles.callout}>
                <Text variant="body" weight="medium">
                  {barbershop.name}
                </Text>
                {barbershop.distance !== undefined && (
                  <Text variant="caption" color={colors.text.secondary}>
                    {barbershop.distance < 1
                      ? `${Math.round(barbershop.distance * 1000)} m`
                      : `${barbershop.distance.toFixed(1)} km`}
                  </Text>
                )}
                <View style={styles.ratingContainer}>
                  <Ionicons name="star" size={12} color={colors.warning.main} />
                  <Text variant="caption" style={styles.rating}>
                    {barbershop.rating.toFixed(1)}
                  </Text>
                </View>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '100%',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: spacing.md,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    alignItems: 'center',
  },
  marker: {
    backgroundColor: colors.primary.main,
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: colors.background.paper,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  callout: {
    padding: spacing.sm,
    minWidth: 150,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xs,
  },
  rating: {
    marginLeft: spacing.xs,
  },
});
