import { useState, useEffect } from 'react';

interface HourlyForecast {
  time: string;
  temperature: number;
  description: string;
}

interface DailyForecast {
  date: string;
  maxTemperature: number;
  minTemperature: number;
  description: string;
}

export const useGetFutureForecast = (location: string) => {
  const [hourlyForecast, setHourlyForecast] = useState<HourlyForecast[]>([]);
  const [dailyForecast, setDailyForecast] = useState<DailyForecast[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const url = `${process.env.EXPO_PUBLIC_WEATHER_FUTURE_API_URL}?key=${process.env.EXPO_PUBLIC_WEATHER_API_KEY}&q=${location}&days=14`;

  useEffect(() => {
    const fetchForecast = async () => {
      if (!location) return;
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch forecast data');
        }

        const data = await response.json();

        // Extract hourly forecast
        const hourlyData = data.forecast.forecastday[0].hour.map((hour: any) => ({
          time: hour.time,
          temperature: hour.temp_c,
          description: hour.condition.text,
        }));
        setHourlyForecast(hourlyData);

        // Extract daily forecast
        const dailyData = data.forecast.forecastday.map((day: any) => ({
          date: day.date,
          maxTemperature: day.day.maxtemp_c,
          minTemperature: day.day.mintemp_c,
          description: day.day.condition.text,
        }));
        setDailyForecast(dailyData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [location]);

  return { hourlyForecast, dailyForecast, loading, error };
};
