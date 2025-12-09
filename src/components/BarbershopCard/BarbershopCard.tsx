import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card } from '../Card';
import { Text } from '../Text';
import { Button } from '../Button';
import { Ionicons } from '@expo/vector-icons';
import { colors, spacing } from '../../theme';
import { Barbershop } from '../../types';

export interface BarbershopCardProps {
  barbershop: Barbershop;
  distance?: number; // Distance in km
  onPress?: () => void;
}

export const BarbershopCard: React.FC<BarbershopCardProps> = ({
  barbershop,
  distance,
  onPress,
}) => {
  return (
    <Card onPress={onPress} style={styles.card}>
      <Card.Header
        title={barbershop.name}
        subtitle={barbershop.address}
        action={
          distance !== undefined && (
            <View style={styles.distanceContainer}>
              <Ionicons name="location" size={16} color={colors.primary.main} />
              <Text variant="caption" color={colors.primary.main} weight="medium">
                {distance < 1
                  ? `${Math.round(distance * 1000)} m`
                  : `${distance.toFixed(1)} km`}
              </Text>
            </View>
          )
        }
      />
      <Card.Content>
        <View style={styles.ratingContainer}>
          <Ionicons name="star" size={16} color={colors.warning.main} />
          <Text variant="body" weight="medium" style={styles.rating}>
            {barbershop.rating.toFixed(1)}
          </Text>
        </View>

        <View style={styles.servicesContainer}>
          {barbershop.services.slice(0, 3).map((service, index) => (
            <View key={index} style={styles.serviceTag}>
              <Text variant="caption" color={colors.text.secondary}>
                {service}
              </Text>
            </View>
          ))}
        </View>

        {barbershop.openingHours && (
          <View style={styles.hoursContainer}>
            <Ionicons name="time-outline" size={14} color={colors.text.secondary} />
            <Text variant="caption" color={colors.text.secondary} style={styles.hours}>
              {barbershop.openingHours}
            </Text>
          </View>
        )}
      </Card.Content>
      <Card.Actions>
        <Button variant="outline" size="small" onPress={onPress}>
          <Button.Text>Ver más</Button.Text>
        </Button>
        <Button variant="primary" size="small" onPress={onPress}>
          <Button.Icon name="calendar" />
          <Button.Text>Reservar</Button.Text>
        </Button>
      </Card.Actions>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: spacing.md,
  },
  distanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  rating: {
    marginLeft: spacing.xs,
  },
  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginBottom: spacing.sm,
  },
  serviceTag: {
    backgroundColor: colors.neutral.gray100,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  hours: {
    marginTop: 1,
  },
});
