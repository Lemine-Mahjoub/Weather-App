import { createContext } from 'react';

interface AppDataContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  defaultCity: string;
  setDefaultCity: (city: string) => void;
  researchCity: string | null;
  setResearchCity: (city: string | null) => void;
  weatherDataDefault: any;
  setWeatherDataDefault: (weatherData: any) => void;
  weatherDataResearch: any;
  setWeatherDataResearch: (weatherData: any) => void;
  loading: boolean;
  error: string | null;
}

export const AppDataContext = createContext<AppDataContextType>({
  theme: 'light',
  setTheme: () => {},
  defaultCity: '',
  setDefaultCity: () => {},
  researchCity: '',
  setResearchCity: () => {},
  weatherDataDefault: {},
  setWeatherDataDefault: () => {},
  weatherDataResearch: {},
  setWeatherDataResearch: () => {},
  loading: false,
  error: null,
});
