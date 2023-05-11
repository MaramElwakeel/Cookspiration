import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExploreScreen from '../screens/ExploreScreen';
import GroceriesScreen from '../screens/GroceriesScreen';
import MyCookbookScreen from '../screens/MyCookbookScreen';
import PlannerScreen from '../screens/PlannerScreen';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Explore') {
              iconName = focused ? 'ios-search' : 'ios-search-outline';
            } 
            else if (route.name === 'My Cookbook') {
              iconName = focused ? 'ios-book' : 'ios-book-outline';  //'ios-folder-open' : 'ios-folder-open-outline'; //'ios-heart' : 'ios-heart-outline';
            }
            else if (route.name === 'Groceries') {
              iconName = focused ? 'ios-cart' : 'ios-cart-outline';    //'ios-basket' : 'ios-basket-outline';
            }
            else if (route.name === 'Planner') {
              iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Explore" component={ExploreScreen} options={{headerShown: false}} />
        <Tab.Screen name="Groceries" component={GroceriesScreen} />
        <Tab.Screen name="Planner" component={PlannerScreen} />
        <Tab.Screen name="My Cookbook" component={MyCookbookScreen} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}