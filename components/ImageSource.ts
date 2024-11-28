import sunny from '@/assets/weatherIcons/sun.svg';
import cloudy from '@/assets/weatherIcons/cloud.svg';
import rainy from '@/assets/weatherIcons/rain.svg';
import snowy from '@/assets/weatherIcons/snow.svg';
import stormy from '@/assets/weatherIcons/thunder.svg';

interface WeatherType {
  type: 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'stormy';
}

export function getImage(weather: WeatherType) {
  switch (weather.type) {
    case 'sunny':
      return sunny;
    case 'cloudy':
      return cloudy;
    case 'rainy':
      return rainy;
    case 'snowy':
      return snowy;
    case 'stormy':
      return stormy;
    default:
      return cloudy;
  }
}

