import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import SoundPlayer from 'react-native-sound-player';
export default function App() {
  const playe = async () => {
    try {
      const s=SoundPlayer.loadUrl("https://api.dictionaryapi.dev/media/pronunciations/en/hello-au.mp3");
      SoundPlayer.play(s);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <View style={styles.container}>
      <Button title='Play' onPress={() => playe()} />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
