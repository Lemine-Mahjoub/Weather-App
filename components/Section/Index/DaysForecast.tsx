import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { useGetFutureForecast } from '@/hooks/useGetFuturForecast';
import { getImage } from '@/components/ImageSource';
import { useFonts, Poppins_400Regular, Poppins_300Light } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const DaysForecast = ({ location }: { location: string }) => {
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_300Light,
  });

  const { dailyForecast, loading, error } = useGetFutureForecast(location);

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Temperature de la Semaine </Text>
      <ScrollView horizontal style={styles.scrollView}>
        {dailyForecast.map((day: any, index: number) => (
          <View key={index} style={styles.card}>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={getImage({ type: day.description as 'sunny' | 'cloudy' | 'rainy' | 'snowy' | 'stormy' })} />
            </View>
            <Text style={styles.date}>{formatDate(day.date)}</Text>
            <Text style={styles.temperature}>Max: {day.maxTemperature}°C</Text>
            <Text style={styles.temperature}>Min: {day.minTemperature}°C</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

function formatDate(date: string) {
  const options = { weekday: 'long' };
  return new Date(date).toLocaleDateString('fr-FR', options);
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    width: '100%',
  },
  title: {
    fontSize: 14,
    fontWeight: '300',
    color: '#FFFFFF',
    fontFamily: 'Poppins_300Light',
    paddingTop: 16,
  },
  scrollView: {
    flexDirection: 'row',
    display: 'flex',
    padding: 10,
    paddingBottom: 20,
    overflow: 'scroll',
    gap: 16,
  },
  card: {
    backgroundColor: '#AAAAAA19',
    borderRadius: 8,
    padding: 12,
    width: 130,
    height: 130,
    boxShadow: '0px 0px 4px #DDDDDD40',
    marginRight: 20,
    display: 'flex',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    padding: 4,
    width: 'fit-content',
    borderColor: '#71717A',
    borderRadius: 8,
    boxShadow: '0px 0px 4px 0px #DDDDDD1A',
  },
  image: {
    width: 40,
    height: 40,
  },
  date: {
    fontSize: 12,
    paddingTop: 12,
    fontWeight: '400',
    color: '#dddddd',
    fontFamily: 'Poppins_400Regular',
  },
  temperature: {
    fontSize: 8,
    paddingTop: 2,
    color: '#64748B',
    fontFamily: 'Poppins_400Regular',
  },
});

export default DaysForecast;
