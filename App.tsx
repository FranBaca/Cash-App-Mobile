import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';


//React Navigation
import RootStack from './components/navigators/RootStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    "Lato-Bold":require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-Regular":require("./assets/fonts/Lato-Regular.ttf")
  })
  if(!fontsLoaded){
    return <AppLoading/>
  }
  return (
    <RootStack/>
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
