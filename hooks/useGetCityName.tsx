import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export function useGetCityName() {
  const [city, setCity] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        return;
      }

      try {
        let location = await Location.getCurrentPositionAsync({});
        const { latitude, longitude } = location.coords;

        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
        );

        const data = await response.json();
        if (data && data.address) {
          const cityName = data.address.city || data.address.town || data.address.village;
          if (cityName) {
            setCity(cityName);
          } else {
            console.log('Ville non trouvée');
          }
        } else {
          console.log('Erreur lors de la récupération des données de localisation');
        }
      } catch (error) {
        console.log('Erreur :', error);
      }
    })();
  }, []);

  return city;
}
