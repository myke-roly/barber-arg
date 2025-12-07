import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, ListItem } from '../../components';
import { colors, spacing } from '../../theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { AppointmentsStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<AppointmentsStackParamList, 'Appointments'>;

const mockAppointments = [
  { id: '1', client: 'Juan Pérez', service: 'Corte de Cabello', time: 'Hoy 15:00' },
  { id: '2', client: 'María García', service: 'Barba', time: 'Hoy 16:00' },
  { id: '3', client: 'Carlos López', service: 'Corte + Barba', time: 'Mañana 10:00' },
];

export const AppointmentsScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text variant="heading2">Mis Citas</Text>
        <Text variant="body" color={colors.text.secondary}>
          Gestiona tus citas programadas
        </Text>
      </View>

      <Card variant="outlined" style={{ padding: 0 }}>
        {mockAppointments.map((appointment, index) => (
          <ListItem
            key={appointment.id}
            divider={index < mockAppointments.length - 1}
            onPress={() => navigation.navigate('AppointmentDetail', { id: appointment.id })}
          >
            <ListItem.Icon>
              <View style={styles.iconPlaceholder} />
            </ListItem.Icon>
            <ListItem.Text
              title={appointment.client}
              subtitle={`${appointment.service} - ${appointment.time}`}
            />
            <ListItem.Action>
              <Text variant="caption">{'>'}</Text>
            </ListItem.Action>
          </ListItem>
        ))}
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
  header: {
    marginBottom: spacing.lg,
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.primary.light,
  },
});
