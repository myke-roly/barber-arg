import { Location } from '../types';

/**
 * Calcula la distancia entre dos coordenadas usando la fórmula Haversine
 * @param from Coordenadas de origen
 * @param to Coordenadas de destino
 * @returns Distancia en kilómetros
 */
export function calculateDistance(from: Location, to: Location): number {
  const R = 6371; // Radio de la Tierra en km
  const dLat = toRad(to.latitude - from.latitude);
  const dLon = toRad(to.longitude - from.longitude);
  
  const lat1 = toRad(from.latitude);
  const lat2 = toRad(to.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;

  return distance;
}

/**
 * Formatea la distancia para mostrar al usuario
 * @param km Distancia en kilómetros
 * @returns String formateado (ej: "1.2 km" o "850 m")
 */
export function formatDistance(km: number): string {
  if (km < 1) {
    const meters = Math.round(km * 1000);
    return `${meters} m`;
  }
  return `${km.toFixed(1)} km`;
}

/**
 * Convierte grados a radianes
 */
function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}
