import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';
import { getImage, WeatherType } from '@/components/ImageSource';
import HourlyForecast from '@/components/Section/Index/HourlyForecast';
import DaysForecast from '@/components/Section/Index/DaysForecast';
import { useGetWeather } from '@/hooks/useGetWeather';
import { AppDataContext } from '@/context/AppDataContext';
export default function SearchScreen() {

  const { researchCity, setResearchCity, weatherDataResearch } = useContext(AppDataContext);
  const [initiated, setInitiated] = useState(researchCity ? true : false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for a city"
        placeholderTextColor="#71717A"
        value={researchCity}
        onChangeText={setResearchCity}
        onSubmitEditing={() => setInitiated(true)}
      />
      {!initiated ? (
        <Text style={styles.promptText}>Please enter a city to search for weather information.</Text>
      ) : (
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {weatherDataResearch && (
            <>
              <View style={styles.actualWeather}>
                <View style={styles.imageContainer}>
                  <Image source={getImage({ type: weatherDataResearch.description as WeatherType['type'] })} />
                </View>
                <Text style={styles.city}>{researchCity}</Text>
                <Text style={styles.temperature}>{weatherDataResearch.temperature}°C</Text>
              </View>
              <HourlyForecast location={researchCity} />
              <DaysForecast location={researchCity} />
            </>
          )}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 48,
    backgroundColor: '#27272A',
    width: '100%',
    height: '100%',
  },
  searchBar: {
    height: 40,
    borderColor: '#71717A',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    color: '#DDDDDD',
  },
  promptText: {
    color: '#DDDDDD',
    textAlign: 'center',
    marginTop: 20,
  },
  loadingText: {
    color: '#DDDDDD',
    textAlign: 'center',
    marginTop: 20,
  },
  imageContainer: {
    padding: 24,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#71717A',
    borderRadius: 8,
    marginBottom: 16,
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
    fontSize: 18,
    fontWeight: '300',
    fontFamily: 'Poppins',
    color: '#64748B',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#DDDDDD',
    textAlign: 'center',
  },
});
