import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';


const location = 'saint-jeannet';

export default function App() {
  const fetchData = async () => {
    try {
      const response = await axios.get(`${process.env.URL}?key=${process.env.API_KEY}&q=${location}`)
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text onPress={fetchData}>Press to fetch data!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
