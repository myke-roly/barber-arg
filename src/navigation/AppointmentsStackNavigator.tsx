import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppointmentsScreen from '../screens/Appointments/AppointmentsScreen';
import AppointmentDetailScreen from '../screens/Appointments/AppointmentDetailScreen';
import type { AppointmentsStackParamList } from './types';

const Stack = createNativeStackNavigator<AppointmentsStackParamList>();

export const AppointmentsStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen 
        name="Appointments" 
        component={AppointmentsScreen}
      />
      <Stack.Screen 
        name="AppointmentDetail" 
        component={AppointmentDetailScreen}
      />
    </Stack.Navigator>
  );
};
