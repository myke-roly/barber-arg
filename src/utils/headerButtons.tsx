import React from 'react';
import { Header } from '../components/Header';
import type { NavigationProp } from '@react-navigation/native';

/**
 * Pre-configured header button helpers
 */

export const backButton = (navigation: any) => (
  <Header.Button icon="back" onPress={() => navigation.goBack()} />
);

export const closeButton = (navigation: NavigationProp<any>) => (
  <Header.Button icon="close" onPress={() => navigation.goBack()} />
);

export const helpButton = (onPress: () => void) => (
  <Header.Button icon="chat" onPress={onPress} />
);

export const notificationButton = (onPress: () => void) => (
  <Header.Button icon="notifications" onPress={onPress} />
);

export const menuButton = (onPress: () => void) => (
  <Header.Button icon="menu" onPress={onPress} />
);
