import { createContext } from 'react';

interface WeatherDataDefault {
  description: string;
  humidity: number;
  temperature: number;
}

interface AppDataContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  defaultCity: string;
  setDefaultCity: (city: string) => void;
  researchCity: string | null;
  setResearchCity: (city: string | null) => void;
  weatherDataDefault: WeatherDataDefault | null;
  setWeatherDataDefault: (weatherData: WeatherDataDefault | null) => void;
  weatherDataResearch: WeatherDataDefault | null;
  setWeatherDataResearch: (weatherData: WeatherDataDefault | null) => void;
  loading: boolean;
  error: string | null;
}

export const AppDataContext = createContext<AppDataContextType>({
  theme: 'light',
  setTheme: () => {},
  defaultCity: '',
  setDefaultCity: () => {},
  researchCity: null,
  setResearchCity: () => {},
  weatherDataDefault: null,
  setWeatherDataDefault: () => {},
  weatherDataResearch: null,
  setWeatherDataResearch: () => {},
  loading: false,
  error: null,
});
