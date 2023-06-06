import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState} from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExploreScreen from '../screens/ExploreScreen';
import GroceriesScreen from '../screens/GroceriesScreen';
import MyCookbookScreen from '../screens/MyCookbookScreen';
import PlannerScreen from '../screens/PlannerScreen';
import RecipePage from '../components/Common/RecipePage';
import CookingPage from '../components/MyCookbook/CookingPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const ExploreStack = ({ data, toggleBookmark }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Explore" options={{headerShown: false}}>
        {props => <ExploreScreen {...props} data={data} toggleBookmark={toggleBookmark} />}
      </Stack.Screen>
      <Stack.Screen name="RecipePage" options={{headerShown: false}} component={RecipePage} />
      <Stack.Screen name="CookingPage" options={{headerShown: false}} component={CookingPage} />
    </Stack.Navigator>
  );
};

const MyCookbookStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="My Cookbook" component={ExploreScreen} options={{headerShown: false}} />
      <Stack.Screen name="RecipePage" component={RecipePage} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};


export default function Tabs() {
  // Placeholder data
  const [data, setData] = useState ([
    {
      id: '1',
      title: 'Lasagne',
      url: 'https://img.taste.com.au/SLzZj5ac/w720-h480-cfill-q80/taste/2010/01/our-favourite-lasagne-118950-2.jpg',
      isBookmarked: true,
      cookingTime: "1h 30m",
      serves: 7,
      ingredients: [
        "Unsalted Butter.",
        "All-purpose Flour.",
        "Whole Milk.",
        "Kosher Salt.",
        "Black Pepper.",
        "Pasta",
        "Vegetable Oil",
        "Bolognese",
        "Cheese"
      ],
      steps: [
        "Boil pasta: Cook in a large pot of salted water.",
        "Prepare meat sauce: Cook sausage and beef with onion and garlic. Drain well, add the pasta sauce & simmer it for a few minutes to thicken.",
        "Combine cheese mixture: Stir the cheese mixture together in a bowl.",
        "Layer & bake: Layer the meat sauce and cheese mixture with lasagna noodles and bake until browned and bubbly.",
        "Spread about a cup of meat sauce into a 9×13 pan. Add a layer of noodles.\nTop the noodles with some of the ricotta cheese mixture. \nRepeat the layers, ending with a layer of noodles and sauce.\nCover with foil and bake. \nRemove foil, top with mozzarella and parmesan, and bake for another 15 minutes.",
        "Once you have prepared the meat sauce and the cheese mixture, you’re ready to layer. \nThis is the order of layers:\nsauce – noodles – cheese\nsauce – noodles – cheese\nsauce – noodles – cheese\nnoodles – sauce (bake) – cheese",
        "Bake this lasagna recipe for a total of one hour. To get a perfect browned cheese topping, you’ll need to bake it in two stages.\n1. Layer and cover it tightly with aluminum foil to retain the moisture.\n2. Once cooked, and heated through, remove the foil, top with cheese, and return to the oven for an additional 15 minutes, or until the top is browned and the lasagna is bubbling.",
        "Important: Let the Lasagna Rest:\nLet the lasagna sit/rest for at least 15 minutes once removed from the oven (even 30-45 minutes is fine). This will keep it from becoming runny and help it to keep its shape when cut. Resting is not required when reheating."
      ]
    },
    {
      id: '2',
      title: 'Chicken and Vegetable',
      url: 'https://img.taste.com.au/_c1oK4CI/w720-h480-cfill-q80/taste/2015/07/basic-chicken-and-vegetable-stirfry_1980x1320-117899-1.jpg',
      isBookmarked: false,
      cookingTime: "1h 30m",
      serves: 7,
      ingredients: [
        "60g unsalted butter",
        "35g all-purpose flour",
        "Kosher salt",
        "Black pepper",
      ],
      steps: []
    },
    {
      id: '3',
      title: 'Butter Chicken',
      url: 'https://img.taste.com.au/ZLg6vu22/w720-h480-cfill-q80/taste/2016/11/easy-butter-chicken-74432-1.jpeg',
      isBookmarked: false,
      cookingTime: "1h 30m",
      serves: 7,
      ingredients: [
        "3 cups of whole milk",
        "Kosher salt",
        "Black pepper",
        "Vegetable oil",
      ],
      steps: []
    },
    {
      id: '4',
      title: 'Carbonara',
      url: 'https://img.taste.com.au/bxgUmhJx/w720-h480-cfill-q80/taste/2016/12/the-best-carbonara-recipe-185091-2.jpg',
      isBookmarked: false,
      cookingTime: "1h 30m",
      serves: 7,
      ingredients: [
        "60g unsalted butter",
        "35g all-purpose flour",
        "85g cheese"
      ],
      steps: []
    },
    {
      id: '5',
      title: 'Beef Nachos',
      url: 'https://img.taste.com.au/y9pxnfpY/w720-h480-cfill-q80/taste/2016/11/beef-nachos_1980x1320-118400-1.jpg',
      isBookmarked: false,
      cookingTime: "1h 30m",
      serves: 7,
      ingredients: [
        "85g cheese"
      ],
      steps: []
    },
    {
      id: '6',
      title: 'Beef Strangof',
      url: 'https://img.taste.com.au/5UkOyKWT/w720-h480-cfill-q80/taste/2016/11/beef-stroganoff-45838-1.jpeg',
      isBookmarked: false,
      cookingTime: "1h 30m",
      serves: 7,
      ingredients: [
        "60g unsalted butter",
        "35g all-purpose flour",
      ],
      steps: []
    },
    {
      id: '7',
      title: 'Quiche',
      url: 'https://img.taste.com.au/NPadfZm_/w720-h480-cfill-q80/taste/2016/11/impossible-quiche-24036-1.jpeg',
      isBookmarked: false,
      cookingTime: "1h 30m",
      serves: 7,
      ingredients: [
        "60g unsalted butter",
        "35g all-purpose flour",
        "3 cups of whole milk",
      ],
      steps: []
    },
    {
      id: '8',
      title: 'Sheperd\'s Pie',
      url: 'https://img.taste.com.au/k6isj2RE/w720-h480-cfill-q80/taste/2010/01/classic-shepherds-pie_1980x1320-118395-1.jpg',
      isBookmarked: false,
      cookingTime: "1h 30m",
      serves: 5,
      ingredients: [
        "60g unsalted butter",
        "35g all-purpose flour",
        "3 cups of whole milk",
        "Kosher salt",
        "Black pepper",
      ],
      steps: []
    },
    {
      id: '9',
      title: 'Pumpkin Soup',
      url: 'https://img.taste.com.au/lNSYKI_b/w720-h480-cfill-q80/taste/2010/01/best-easy-pumpkin-soup-recipe-185570-1.jpg',
      isBookmarked: false,
      cookingTime: "1h 30m",
      serves: 7,
      ingredients: [
      ],
      steps: []
    },
    {
      id: '10',
      title: 'Stuffed Grape Leaves',
      url: 'https://www.fifteenspatulas.com/wp-content/uploads/2013/09/Stuffed-Grape-Leaves-Dolmas-1.jpg',
      isBookmarked: false,
      cookingTime: "1h 30m",
      serves: 0,
      ingredients: [
      ],
      steps: []
    },
    {
      id: '11',
      title: 'Creamy Mushroom Orzo',
      url: 'https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/06/creamy-mushrooms-orzo-1.jpg',
      isBookmarked: true,
      cookingTime: "1h 30m",
      serves: 0,
      ingredients: [
      ],
      steps: []
    },
  ]);

  const toggleBookmark = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        return {...item, isBookmarked: !item.isBookmarked}
      } else {
        return item;
      }
    });
    setData(newData);
  };

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
          
        <Tab.Screen name="Explore" 
            options={{headerShown: false}} 
            children={()=><ExploreStack data={data} toggleBookmark={toggleBookmark} />}
        />
        <Tab.Screen name="Groceries" 
        children={()=><GroceriesScreen data={data} toggleBookmark={toggleBookmark} />} 
        />
        <Tab.Screen name="Planner" 
          children={()=><PlannerScreen data={data} toggleBookmark={toggleBookmark} />} 
        />
        <Tab.Screen name="My Cookbook" 
          options={{headerShown: false}} 
          children={()=><MyCookbookScreen data={data} toggleBookmark={toggleBookmark} />} 
        />
    </Tab.Navigator>
  );
}