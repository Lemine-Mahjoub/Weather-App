import { useState, useEffect } from 'react';
import * as Location from 'expo-location';
interface WeatherData {
  temperature: number;
  description: string;
  humidity: number;
}

export const useGetWeather = (location: string) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const url = `${process.env.EXPO_PUBLIC_WEATHER_API_URL}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${location}`

  useEffect(() => {
    const fetchWeather = async () => {
      if (!location) return;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }

        const data = await response.json();
        setWeatherData({
          temperature: data.current.temp_c,
          description: data.current.condition.text,
          humidity: data.current.humidity,
        });
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [location]);

  return { weatherData, loading, error };
};
