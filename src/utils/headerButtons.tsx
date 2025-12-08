import React from 'react';
import { HeaderButton } from '../components/Header';
import type { NavigationProp } from '@react-navigation/native';

/**
 * Pre-configured header button helpers
 */

export const backButton = (navigation: NavigationProp<any>) => (
  <HeaderButton icon="back" onPress={() => navigation.goBack()} />
);

export const closeButton = (navigation: NavigationProp<any>) => (
  <HeaderButton icon="close" onPress={() => navigation.goBack()} />
);

export const helpButton = (onPress: () => void) => (
  <HeaderButton icon="help" onPress={onPress} />
);

export const notificationButton = (onPress: () => void) => (
  <HeaderButton icon="notifications" onPress={onPress} />
);

export const menuButton = (onPress: () => void) => (
  <HeaderButton icon="menu" onPress={onPress} />
);
