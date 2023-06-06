import {Text, View } from 'react-native';
import GroceriesPage from '../components/Groceries/GroceriesPage';

export default function GroceriesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <GroceriesPage />
    </View>
  );
}