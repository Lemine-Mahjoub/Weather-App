import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AppDataContext } from '@/context/AppDataContext';

export const IndexContainer: React.FC = () => {
  const { weatherDataDefault, loading, error } = useContext(AppDataContext);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      {!loading && !error && (
        <>
          <Text>{weatherDataDefault?.temperature}</Text>
          <Text>{weatherDataDefault?.description}</Text>
          <Text>{weatherDataDefault?.humidity}</Text>
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
