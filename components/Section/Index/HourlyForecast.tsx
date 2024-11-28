import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { useGetFutureForecast } from '@/hooks/useGetFuturForecast';

const HourlyForecast = ({ location }: { location: string }) => {
  const { hourlyForecast, loading, error } = useGetFutureForecast(location);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <ScrollView horizontal style={styles.scrollView}>
      {hourlyForecast.map((hour: any, index: number) => (
        <View key={index} style={styles.card}>
          <Text style={styles.time}>{hour.time}</Text>
          <Text style={styles.temperature}>{hour.temperature}°C</Text>
          <Text style={styles.description}>{hour.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexDirection: 'row',
    padding: 10,
    overflow: 'scroll',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 14,
    color: '#333',
  },
  description: {
    fontSize: 12,
    color: '#666',
  },
});

export default HourlyForecast;
