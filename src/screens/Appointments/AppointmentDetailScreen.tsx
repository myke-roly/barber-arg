import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button } from '../../components';
import { colors, spacing } from '../../theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AppointmentsStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AppointmentsStackParamList, 'AppointmentDetail'>;

export const AppointmentDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Card>
        <Card.Header title="Detalles de la Cita" subtitle={`ID: ${id}`} />
        <Card.Body>
          <View style={styles.detailRow}>
            <Text variant="label">Cliente:</Text>
            <Text variant="body">Juan Pérez</Text>
          </View>
          <View style={styles.detailRow}>
            <Text variant="label">Servicio:</Text>
            <Text variant="body">Corte de Cabello</Text>
          </View>
          <View style={styles.detailRow}>
            <Text variant="label">Fecha y Hora:</Text>
            <Text variant="body">Hoy a las 15:00</Text>
          </View>
          <View style={styles.detailRow}>
            <Text variant="label">Duración:</Text>
            <Text variant="body">30 minutos</Text>
          </View>
          <View style={styles.detailRow}>
            <Text variant="label">Precio:</Text>
            <Text variant="body">$500</Text>
          </View>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline" size="small" onPress={() => navigation.goBack()}>
            <Button.Text>Volver</Button.Text>
          </Button>
          <Button variant="primary" size="small">
            <Button.Text>Confirmar</Button.Text>
          </Button>
        </Card.Footer>
      </Card>
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
  detailRow: {
    marginBottom: spacing.md,
  },
});
