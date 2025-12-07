import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Button, Card } from '../../components';
import { colors, spacing } from '../../theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { HomeStackParamList } from '../../navigation/types';

type Props = NativeStackScreenProps<HomeStackParamList, 'Home'>;

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text variant="heading1">Bienvenido</Text>
        <Text variant="body" color={colors.text.secondary}>
          Gestiona tus citas y servicios
        </Text>
      </View>

      <View style={styles.section}>
        <Text variant="heading3" style={styles.sectionTitle}>
          Acciones Rápidas
        </Text>
        
        <Card>
          <Card.Body>
            <Button fullWidth variant="primary" style={styles.actionButton}>
              <Button.Text>Nueva Cita</Button.Text>
            </Button>
            <Button fullWidth variant="secondary" style={styles.actionButton}>
              <Button.Text>Ver Calendario</Button.Text>
            </Button>
            <Button fullWidth variant="outline">
              <Button.Text>Mis Servicios</Button.Text>
            </Button>
          </Card.Body>
        </Card>
      </View>

      <View style={styles.section}>
        <Text variant="heading3" style={styles.sectionTitle}>
          Próximas Citas
        </Text>
        <Card>
          <Card.Header 
            title="Corte de Cabello" 
            subtitle="Hoy a las 15:00"
          />
          <Card.Body>
            <Text variant="body">Cliente: Juan Pérez</Text>
            <Text variant="caption" color={colors.text.secondary}>
              Duración: 30 minutos
            </Text>
          </Card.Body>
        </Card>
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
  header: {
    marginBottom: spacing.xl,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    marginBottom: spacing.md,
  },
  actionButton: {
    marginBottom: spacing.md,
  },
});
