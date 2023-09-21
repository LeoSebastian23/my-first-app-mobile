import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert, Switch } from 'react-native';
import image01 from './assets/android-image.png';
import { ThemeContext } from './context/theme.context';

export default function App() {

  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <View style={theme === 'dark' ? styles.container : [styles.container, { backgroundColor: '#e6e6fa' }]}>
        <Text style={styles.title}>Bienvenido a mi primer App!</Text>
        <Image style={styles.image}
          source={image01}
        />
        <Button
          title="Presiona el boton"
          onPress={() => Alert.alert('Bienvenido a esta pequeña aplicacion. Es un gusto conocerte!')}
        />
        <Switch
          value={theme === 'light'}
          thumbColor={'#f4f3f4'}
          onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
        <StatusBar style="auto" />
      </View>
    </ThemeContext.Provider>
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
    fontSize: 30,
    backgroundColor: '#90ee90',
    padding:10,
    borderRadius:10,
    textAlign: "center"
  },
  image: {
    width: 200,
    height: 200,
  },
});
