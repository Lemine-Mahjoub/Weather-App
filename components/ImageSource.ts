import sunny from '@/assets/weatherIcons/sun.svg';
import cloudy from '@/assets/weatherIcons/cloud.svg';
import rainy from '@/assets/weatherIcons/rain.svg';
import snowy from '@/assets/weatherIcons/snow.svg';
import stormy from '@/assets/weatherIcons/thunder.svg';

export interface WeatherType {
  type:
    | 'Clear'
    | 'Sunny'
    | 'Partly cloudy'
    | 'Cloudy'
    | 'Overcast'
    | 'Mist'
    | 'Patchy rain possible'
    | 'Patchy snow possible'
    | 'Patchy sleet possible'
    | 'Patchy freezing drizzle possible'
    | 'Thundery outbreaks possible'
    | 'Blowing snow'
    | 'Blizzard'
    | 'Fog'
    | 'Freezing fog'
    | 'Patchy light drizzle'
    | 'Light drizzle'
    | 'Freezing drizzle'
    | 'Heavy freezing drizzle'
    | 'Patchy light rain'
    | 'Light rain'
    | 'Moderate rain at times'
    | 'Moderate rain'
    | 'Heavy rain at times'
    | 'Heavy rain'
    | 'Light freezing rain'
    | 'Moderate or heavy freezing rain'
    | 'Light sleet'
    | 'Moderate or heavy sleet'
    | 'Patchy light snow'
    | 'Light snow'
    | 'Patchy moderate snow'
    | 'Moderate snow'
    | 'Patchy heavy snow'
    | 'Heavy snow'
    | 'Ice pellets'
    | 'Light rain shower'
    | 'Moderate or heavy rain shower'
    | 'Torrential rain shower'
    | 'Light sleet showers'
    | 'Moderate or heavy sleet showers'
    | 'Light snow showers'
    | 'Moderate or heavy snow showers'
    | 'Light showers of ice pellets'
    | 'Moderate or heavy showers of ice pellets'
    | 'Patchy light rain with thunder'
    | 'Moderate or heavy rain with thunder'
    | 'Patchy light snow with thunder'
    | 'Moderate or heavy snow with thunder';
}

export function getImage(weather: WeatherType) {
  switch (weather.type) {
    case 'Clear':
    case 'Sunny':
      return sunny;
    case 'Partly cloudy':
    case 'Cloudy':
    case 'Overcast':
      return cloudy;
    case 'Mist':
    case 'Patchy rain possible':
    case 'Patchy light drizzle':
    case 'Light drizzle':
    case 'Patchy light rain':
    case 'Light rain':
    case 'Moderate rain at times':
    case 'Moderate rain':
    case 'Heavy rain at times':
    case 'Heavy rain':
    case 'Light rain shower':
    case 'Moderate or heavy rain shower':
    case 'Torrential rain shower':
    case 'Patchy light rain with thunder':
    case 'Moderate or heavy rain with thunder':
      return rainy;
    case 'Patchy snow possible':
    case 'Blowing snow':
    case 'Blizzard':
    case 'Patchy light snow':
    case 'Light snow':
    case 'Patchy moderate snow':
    case 'Moderate snow':
    case 'Patchy heavy snow':
    case 'Heavy snow':
    case 'Light snow showers':
    case 'Moderate or heavy snow showers':
    case 'Patchy light snow with thunder':
    case 'Moderate or heavy snow with thunder':
      return snowy;
    case 'Thundery outbreaks possible':
    case 'Patchy sleet possible':
    case 'Patchy freezing drizzle possible':
    case 'Freezing drizzle':
    case 'Heavy freezing drizzle':
    case 'Light freezing rain':
    case 'Moderate or heavy freezing rain':
    case 'Light sleet':
    case 'Moderate or heavy sleet':
    case 'Light sleet showers':
    case 'Moderate or heavy sleet showers':
    case 'Ice pellets':
    case 'Light showers of ice pellets':
    case 'Moderate or heavy showers of ice pellets':
      return stormy;
    default:
      return cloudy;
  }
}

