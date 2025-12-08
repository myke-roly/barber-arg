import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, ListItem } from '../../components';
import { colors, spacing } from '../../theme';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { ProfileStackParamList } from '../../navigation/types';
import { screen } from '../../utils/screen';
import { notificationButton } from '../../utils/headerButtons';

type Props = NativeStackScreenProps<ProfileStackParamList, 'Profile'>;

const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text variant="heading2" style={styles.name}>
          Barbería El Corte
        </Text>
        <Text variant="body" color={colors.text.secondary}>
          barberia@example.com
        </Text>
      </View>

      <View style={styles.section}>
        <Text variant="heading3" style={styles.sectionTitle}>
          Configuración
        </Text>
        <Card variant="outlined" style={{ padding: 0 }}>
          <ListItem divider onPress={() => {}}>
            <ListItem.Icon>
              <View style={[styles.iconPlaceholder, { backgroundColor: colors.primary.light }]} />
            </ListItem.Icon>
            <ListItem.Text title="Editar Perfil" />
            <ListItem.Action>
              <Text variant="caption">{'>'}</Text>
            </ListItem.Action>
          </ListItem>
          <ListItem divider onPress={() => {}}>
            <ListItem.Icon>
              <View style={[styles.iconPlaceholder, { backgroundColor: colors.secondary.light }]} />
            </ListItem.Icon>
            <ListItem.Text title="Notificaciones" />
            <ListItem.Action>
              <Text variant="caption">{'>'}</Text>
            </ListItem.Action>
          </ListItem>
          <ListItem divider onPress={() => {}}>
            <ListItem.Icon>
              <View style={[styles.iconPlaceholder, { backgroundColor: colors.success.light }]} />
            </ListItem.Icon>
            <ListItem.Text title="Horarios" />
            <ListItem.Action>
              <Text variant="caption">{'>'}</Text>
            </ListItem.Action>
          </ListItem>
          <ListItem onPress={() => {}}>
            <ListItem.Icon>
              <View style={[styles.iconPlaceholder, { backgroundColor: colors.error.light }]} />
            </ListItem.Icon>
            <ListItem.Text title="Cerrar Sesión" />
          </ListItem>
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
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary.main,
    marginBottom: spacing.md,
  },
  name: {
    marginBottom: spacing.xs,
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    marginBottom: spacing.md,
  },
  iconPlaceholder: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default screen(ProfileScreen, {
  title: 'Perfil',
  topBarRight: [notificationButton(() => console.log('Notifications'))]
});
