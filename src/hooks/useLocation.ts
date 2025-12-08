import { useState, useEffect } from 'react';
import * as ExpoLocation from 'expo-location';
import { Location } from '../types';

export type PermissionStatus = 'granted' | 'denied' | 'undetermined';

interface UseLocationReturn {
  location: Location | null;
  loading: boolean;
  error: string | null;
  permissionStatus: PermissionStatus;
  requestPermission: () => Promise<void>;
}

/**
 * Hook para manejar la ubicación del usuario
 * Solicita permisos y obtiene la ubicación actual
 */
export function useLocation(): UseLocationReturn {
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>('undetermined');

  const requestPermission = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        setPermissionStatus('granted');
        await getCurrentLocation();
      } else {
        setPermissionStatus('denied');
        setError('Permisos de ubicación denegados');
      }
    } catch (err) {
      setError('Error al solicitar permisos de ubicación');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getCurrentLocation = async () => {
    try {
      const position = await ExpoLocation.getCurrentPositionAsync({
        accuracy: ExpoLocation.Accuracy.Balanced,
      });
      
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
      setError(null);
    } catch (err) {
      setError('Error al obtener la ubicación');
      console.error(err);
    }
  };

  useEffect(() => {
    const checkPermissions = async () => {
      try {
        const { status } = await ExpoLocation.getForegroundPermissionsAsync();
        if (status === 'granted') {
          setPermissionStatus('granted');
          await getCurrentLocation();
        } else {
          setPermissionStatus(status === 'denied' ? 'denied' : 'undetermined');
        }
      } catch (err) {
        setError('Error al verificar permisos');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    checkPermissions();
  }, []);

  return {
    location,
    loading,
    error,
    permissionStatus,
    requestPermission,
  };
}
