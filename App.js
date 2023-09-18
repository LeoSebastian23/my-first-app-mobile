import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import image01 from './assets/android-image.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola mundo!</Text>
      <Image style= {styles.image}
      source= {image01} 
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#008b8b',
  },
  title: {
    fontSize: 30
  },
  image: {
    width: 200,
    height: 200,
  }
});
