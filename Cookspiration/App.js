import { StyleSheet } from 'react-native';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import Tabs from './src/navigation/BottomTabNavigator';

const CustomDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#000',
  },
};

export default function App() {
  console.error = () => {};

  return (
    <NavigationContainer theme={CustomDarkTheme}>
      <Tabs />
    </NavigationContainer>
  );
}