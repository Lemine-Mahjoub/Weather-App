import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useGetWeather } from '@/hooks/useGetWeather';

export const IndexContainer: React.FC = () => {
  const { weatherData, loading, error } = useGetWeather('Paris');
  return (
    <View style={styles.container}>
      <Text>{loading ? 'Loading...' : ''}</Text>
      <Text>{error ? error : ''}</Text>
      <Text>{weatherData?.temperature}</Text>
      <Text>{weatherData?.description}</Text>
      <Text>{weatherData?.humidity}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});