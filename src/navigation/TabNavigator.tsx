import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator } from './HomeStackNavigator';
import { AppointmentsStackNavigator } from './AppointmentsStackNavigator';
import { ProfileStackNavigator } from './ProfileStackNavigator';
import { colors } from '../theme';
import type { TabParamList } from './types';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<TabParamList>();

export const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary.main,
        tabBarInactiveTintColor: colors.neutral.gray400,
        tabBarStyle: {
          backgroundColor: colors.background.paper,
          borderTopColor: colors.neutral.gray200,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStackNavigator}
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="AppointmentsTab"
        component={AppointmentsStackNavigator}
        options={{
          title: 'Citas',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStackNavigator}
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
