import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';
import RecipeCard from '../Common/RecipeCard';

// WeekView Component
const WeekView = ({ date, setDate }) => {
  const getStartOfWeek = (date) => {
    const dateCopy = new Date(date);
    const day = dateCopy.getDay();
    const difference = dateCopy.getDate() - day + (day === 0 ? -6:1); // adjust when day is Sunday
    return new Date(dateCopy.setDate(difference));
  }

  const getEndOfWeek = (date) => {
    const dateCopy = new Date(date);
    dateCopy.setDate(dateCopy.getDate() + (6 - dateCopy.getDay()));
    return dateCopy;
  }

  const previousWeek = () => {
    const newDate = new Date(date.setDate(date.getDate() - 7));
    setDate(newDate);
  };

  const nextWeek = () => {
    const newDate = new Date(date.setDate(date.getDate() + 7));
    setDate(newDate);
  };

  const startOfWeek = getStartOfWeek(date);
  const endOfWeek = getEndOfWeek(date);

  return (
    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, borderRadius: 10, backgroundColor: 'tomato', margin: 10}}>
      <Icon
          name='arrow-back'
          type='ionicon'
          color='#000'
          onPress={previousWeek}
      />
      <Text style={{color: 'black', fontSize: 21}}>
        {`${new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit' }).format(startOfWeek)} - ${new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit' }).format(endOfWeek)}`}
      </Text>
      <Icon
          name='arrow-forward'
          type='ionicon'
          color='#000'
          onPress={nextWeek}
      />
    </View>
  );
};



// Planner Page
export default function PlannerPage() {
  const [date, setDate] = useState(new Date());
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const recipesForDays = {
    Sunday: [
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
    ],
    Monday: [],
    Tuesday: [],
    Wednesday: [],
    Thursday: [],
    Friday: [],
    Saturday: [],
  };
  return (
    <View>
      <WeekView date={date} setDate={setDate} />
      {days.map((day, index) => (
        <View key={index}>
          <TouchableOpacity onPress={() => console.log(day)}>
            <Text style={styles.dayText}>{day}</Text>
          </TouchableOpacity>
          {recipesForDays[day]?.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} showBookmarkIcon={false}/>  // Replace with your actual Recipe component
          ))}
  </View>
))}
    </View>
  );
};


const styles = StyleSheet.create({
  daysContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  container: {
    padding: 10,
  },
  dayText: {
    fontSize: 18,
    color: '#fff',
    padding: 20,
  },
})