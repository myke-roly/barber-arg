import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { HomeStackParamList } from '../../navigation/types';
import { Card, Button, Text } from '../../components';
import { colors, spacing } from '../../theme';
import { screen } from '../../utils/screen';
import { backButton } from '../../utils/headerButtons';
import { Ionicons } from '@expo/vector-icons';
import { barbershops } from '../../data/barbershops'; // We'll fetch from here for now

type Props = NativeStackScreenProps<HomeStackParamList, 'BarbershopDetail'>;

const BarbershopDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { id } = route.params;
  const barbershop = barbershops.find(b => b.id === id);

  if (!barbershop) {
    return (
      <View style={styles.center}>
        <Text variant="body">Barbería no encontrada</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header Image Placeholder (or Map later) */}
        <View style={styles.imagePlaceholder}>
          <Ionicons name="image-outline" size={64} color={colors.neutral.gray300} />
        </View>

        <View style={styles.detailsContainer}>
          <Text variant="heading1" style={styles.title}>{barbershop.name}</Text>
          
          <View style={styles.row}>
            <Ionicons name="location-outline" size={20} color={colors.text.secondary} />
            <Text variant="body" color={colors.text.secondary} style={styles.text}>
              {barbershop.address}
            </Text>
          </View>

          <View style={styles.row}>
            <Ionicons name="star" size={20} color={colors.warning.main} />
            <Text variant="body" weight="bold" style={styles.text}>
              {barbershop.rating.toFixed(1)}
            </Text>
            <Text variant="body" color={colors.text.secondary}>
              (120 reseñas)
            </Text>
          </View>

           {barbershop.openingHours && (
            <View style={styles.row}>
              <Ionicons name="time-outline" size={20} color={colors.text.secondary} />
              <Text variant="body" color={colors.text.secondary} style={styles.text}>
                {barbershop.openingHours}
              </Text>
            </View>
          )}

          <View style={styles.divider} />

          <Text variant="heading3" style={styles.sectionTitle}>Servicios</Text>
          {barbershop.services.map((service, index) => (
            <Card key={index} style={styles.serviceCard} onPress={() => {}}>
              <Card.Content style={styles.serviceContent}>
                <View>
                  <Text variant="body" weight="medium">{service}</Text>
                  <Text variant="caption" color={colors.text.secondary}>30 min</Text>
                </View>
                <Button variant="outline" size="small">
                   <Button.Text>Reservar</Button.Text>
                </Button>
              </Card.Content>
            </Card>
          ))}
        </View>
      </ScrollView>

      {/* Floating Action Button area (optional) */}
      <View style={styles.footer}>
         <Button variant="primary" fullWidth onPress={() => {}}>
            <Button.Text>Reservar Cita</Button.Text>
         </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background.default,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    paddingBottom: 100, // Space for footer
  },
  imagePlaceholder: {
    height: 200,
    backgroundColor: colors.neutral.gray100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    padding: spacing.lg,
    backgroundColor: colors.background.paper,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24, // Overlap image
  },
  title: {
    marginBottom: spacing.xs,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  text: {
    marginLeft: spacing.sm,
  },
  divider: {
    height: 1,
    backgroundColor: colors.neutral.gray200,
    marginVertical: spacing.lg,
  },
  sectionTitle: {
    marginBottom: spacing.md,
  },
  serviceCard: {
    marginBottom: spacing.sm,
  },
  serviceContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.background.paper,
    padding: spacing.lg,
    borderTopWidth: 1,
    borderTopColor: colors.neutral.gray200,
  }
});

export default screen(BarbershopDetailScreen, {
  title: 'Detalle', // Or dynamic title? screen util might support static currently
  topBarLeft: [(props: any) => backButton(props.navigation)],
});
