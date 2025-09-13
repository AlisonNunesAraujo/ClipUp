import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import PriveRouts from './src/routs/priveRouts';

export default function App() {
  return (
    <NavigationContainer>
       <PriveRouts />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


