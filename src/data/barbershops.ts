import { Barbershop } from '../types';

// Mock data de peluquerías en Buenos Aires
// Coordenadas reales de diferentes barrios de Buenos Aires
export const barbershops: Barbershop[] = [
  {
    id: '1',
    name: 'Barbería Palermo',
    address: 'Av. Santa Fe 3250, Palermo',
    coordinates: {
      latitude: -34.5889,
      longitude: -58.4156,
    },
    rating: 4.8,
    services: ['Corte', 'Barba', 'Afeitado'],
    phone: '+54 11 4831-2345',
    openingHours: 'Lun-Sab 9:00-20:00',
  },
  {
    id: '2',
    name: 'El Clásico Barbershop',
    address: 'Av. Corrientes 1520, San Nicolás',
    coordinates: {
      latitude: -34.6037,
      longitude: -58.3816,
    },
    rating: 4.6,
    services: ['Corte', 'Barba', 'Coloración'],
    phone: '+54 11 4372-8901',
    openingHours: 'Lun-Vie 10:00-19:00',
  },
  {
    id: '3',
    name: 'Barbería Recoleta',
    address: 'Av. Callao 1234, Recoleta',
    coordinates: {
      latitude: -34.5965,
      longitude: -58.3927,
    },
    rating: 4.9,
    services: ['Corte Premium', 'Barba', 'Tratamientos'],
    phone: '+54 11 4813-5678',
    openingHours: 'Lun-Sab 9:00-21:00',
  },
  {
    id: '4',
    name: 'Barber Studio Belgrano',
    address: 'Av. Cabildo 2156, Belgrano',
    coordinates: {
      latitude: -34.5617,
      longitude: -58.4567,
    },
    rating: 4.7,
    services: ['Corte', 'Barba', 'Afeitado Clásico'],
    phone: '+54 11 4782-3456',
    openingHours: 'Mar-Dom 10:00-20:00',
  },
  {
    id: '5',
    name: 'La Barbería de Caballito',
    address: 'Av. Rivadavia 5234, Caballito',
    coordinates: {
      latitude: -34.6177,
      longitude: -58.4368,
    },
    rating: 4.5,
    services: ['Corte', 'Barba', 'Niños'],
    phone: '+54 11 4903-7890',
    openingHours: 'Lun-Sab 9:00-19:00',
  },
  {
    id: '6',
    name: 'Modern Barber Villa Crespo',
    address: 'Av. Corrientes 5678, Villa Crespo',
    coordinates: {
      latitude: -34.5998,
      longitude: -58.4389,
    },
    rating: 4.8,
    services: ['Corte Moderno', 'Barba', 'Diseño'],
    phone: '+54 11 4855-2341',
    openingHours: 'Lun-Sab 10:00-21:00',
  },
  {
    id: '7',
    name: 'Barbería San Telmo',
    address: 'Defensa 890, San Telmo',
    coordinates: {
      latitude: -34.6214,
      longitude: -58.3731,
    },
    rating: 4.6,
    services: ['Corte Tradicional', 'Barba', 'Afeitado'],
    phone: '+54 11 4361-4567',
    openingHours: 'Mar-Dom 11:00-20:00',
  },
  {
    id: '8',
    name: 'Premium Barber Núñez',
    address: 'Av. Cabildo 3890, Núñez',
    coordinates: {
      latitude: -34.5436,
      longitude: -58.4645,
    },
    rating: 4.9,
    services: ['Corte Premium', 'Barba Deluxe', 'Spa Capilar'],
    phone: '+54 11 4704-8901',
    openingHours: 'Lun-Sab 9:00-21:00',
  },
];
