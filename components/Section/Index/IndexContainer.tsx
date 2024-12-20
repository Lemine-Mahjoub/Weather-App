import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native';
import { AppDataContext } from '@/context/AppDataContext';
import { getImage, WeatherType } from '@/components/ImageSource';
import { useFonts } from 'expo-font';
import HourlyForecast from './HourlyForecast';
import DaysForecast from './DaysForecast';

export const IndexContainer: React.FC = () => {
  const { weatherDataDefault, loading, error, defaultCity } = useContext(AppDataContext);

  const [fontsLoaded] = useFonts({
    'Poppins': require('@/assets/fonts/Poppins-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <Text>Loading fonts...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {!loading && !error && (
        <>
          <View style={styles.actualWeather}>
            <View style={styles.imageContainer}>
              <Image source={getImage({ type: weatherDataDefault?.description as WeatherType['type'] })} />
            </View>
            <Text style={styles.city}>{defaultCity}</Text>
            <Text style={styles.temperature}>{weatherDataDefault?.temperature}°C</Text>
          </View>
          <HourlyForecast location={defaultCity} />
          <DaysForecast location={defaultCity} />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#27272A',
    width: '100%',
    height: '100%',
    paddingBottom: 48,
  },
  imageContainer: {
    padding: 24,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#71717A',
    borderRadius: 8,
    boxShadow: '0px 0px 4px 0px #DDDDDD1A',
  },
  city: {
    fontSize: 20,
    fontWeight: '500',
    fontFamily: 'Poppins',
    color: '#DDDDDD',
    paddingTop: 16,
  },
  actualWeather: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 8,
  },
  temperature: {
    fontSize: 12,
    fontWeight: '300',
    fontFamily: 'Poppins',
    color: '#64748B',
  },
});
