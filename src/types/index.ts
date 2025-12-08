// Core types for the application

export interface Location {
  latitude: number;
  longitude: number;
}

export interface Barbershop {
  id: string;
  name: string;
  address: string;
  coordinates: Location;
  rating: number;
  services: string[];
  image?: string;
  phone?: string;
  openingHours?: string;
}
