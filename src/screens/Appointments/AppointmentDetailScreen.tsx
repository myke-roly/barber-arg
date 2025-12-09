import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button } from '../../components';
import { colors, spacing } from '../../theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AppointmentsStackParamList } from '../../navigation/types';
import { screen } from '../../utils/screen';
import { backButton } from '../../utils/headerButtons';

type Props = NativeStackScreenProps<AppointmentsStackParamList, 'AppointmentDetail'>;

const AppointmentDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { id } = route.params;

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Card>
        <Card.Header title="Detalles de la Cita" subtitle={`ID: ${id}`} />
        <Card.Content>
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
        </Card.Content>
        <Card.Actions>
          <Button variant="outline" size="small" onPress={() => navigation.goBack()}>
            <Button.Text>Volver</Button.Text>
          </Button>
          <Button variant="primary" size="small">
            <Button.Text>Confirmar</Button.Text>
          </Button>
        </Card.Actions>
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

export default screen(AppointmentDetailScreen, {
  title: 'Detalle de Cita',
  topBarLeft: [(props: any) => backButton(props.navigation)]
});
