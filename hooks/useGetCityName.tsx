import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export function useGetCityName() {
  const [city, setCity] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getCityFromCoordinates = async (latitude: number, longitude: number) => {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
    );
    const data = await response.json();

    if (!data?.address) {
      throw new Error('Erreur lors de la récupération des données de localisation');
    }

    const cityName = data.address.city || data.address.town || data.address.village;
    if (!cityName) {
      throw new Error('Ville non trouvée');
    }

    return cityName;
  };

  const getCurrentLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      throw new Error('Permission de localisation non accordée');
    }

    const location = await Location.getCurrentPositionAsync({});
    return location.coords;
  };

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);

        const { latitude, longitude } = await getCurrentLocation();
        const cityName = await getCityFromCoordinates(latitude, longitude);
        setCity(cityName);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Une erreur est survenue');
        console.error('Erreur :', error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { city, loading, error };
}
