import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AppDataContext } from '@/context/AppDataContext';

export const IndexContainer: React.FC = () => {
  const { weatherDataDefault, loading, error, defaultCity } = useContext(AppDataContext);
  console.log(weatherDataDefault);
  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>Error: {error}</Text>}
      {!loading && !error && (
        <>
          <Text>{weatherDataDefault?.description}</Text>
          <Text>{weatherDataDefault?.humidity}</Text>
          <Text>{weatherDataDefault?.temperature}</Text>
          <Text>{defaultCity}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'red',
  },
});
