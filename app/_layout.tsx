import { useState, useMemo, useEffect } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { AppDataContext } from '@/context/AppDataContext';
import { useGetCityName } from '@/hooks/useGetCityName';
import { useGetWeather } from '@/hooks/useGetWeather';
import { useGetDeviceTheme } from '@/hooks/useGetDeviceTheme';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  SplashScreen.hideAsync();

  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [defaultCity, setDefaultCity] = useState<string>('Paris');
  const [researchCity, setResearchCity] = useState<string | null>(null);
  const [weatherDataDefault, setWeatherDataDefault] = useState<any>({});
  const [weatherDataResearch, setWeatherDataResearch] = useState<any>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const deviceTheme = useGetDeviceTheme();
  const { city, loading: cityLoading, error: cityError } = useGetCityName();
  const { weatherData, loading: weatherLoading, error: weatherError } = useGetWeather(defaultCity);

  useEffect(() => {
    if (deviceTheme) {
      setTheme(deviceTheme);
    }
  }, [deviceTheme]);

  useEffect(() => {
    if (!cityLoading && !cityError && city) {
      setDefaultCity(city);
    }
  }, [city, cityLoading, cityError]);

  useEffect(() => {
    if (!weatherLoading && !weatherError && weatherData) {
      setWeatherDataDefault(weatherData);
    }
    setLoading(false);
    setError(weatherError);
  }, [weatherData, weatherLoading, weatherError]);

  useEffect(() => {
    if (researchCity) {
      const { weatherData, error, loading } = useGetWeather(researchCity);
      setWeatherDataResearch(weatherData);
      setError(error ?? '');
      setLoading(loading);
    }
  }, [researchCity]);


  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
      defaultCity,
      setDefaultCity,
      researchCity,
      setResearchCity,
      weatherDataDefault,
      setWeatherDataDefault,
      weatherDataResearch,
      setWeatherDataResearch,
      loading,
      error,
    }),
    [theme, defaultCity, researchCity, weatherDataDefault, weatherDataResearch, loading, error]
  );

  return (
    <AppDataContext.Provider value={contextValue}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
    </AppDataContext.Provider>
  );
}
