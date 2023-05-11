import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import CollectionCard from './CollectionCard';

// Placeholder data
const DATA = [
  {
    id: '1',
    title: 'Made it',
    recipes: [{
      id: '1',
      title: 'Creamy Mushroom Orzo',
      image: 'https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/06/creamy-mushrooms-orzo-1.jpg'
    }],
    recipeCount: 5,
    // other properties...
  },
  {
    id: '2',
    title: 'Chicken',
    recipes: [],
    recipeCount: 2,
    // other properties...
  },
];

export default function CollectionList() {
  const renderSeeAllButton = () => {
    // Add your navigation or action handler here
    console.log('See All pressed');
  };

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Collections</Text>
        <TouchableOpacity onPress={renderSeeAllButton}>
          <Text style={{fontSize: 16, color: 'white', backgroundColor: 'purple', borderRadius: 10, padding: 5}}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({ item }) => <CollectionCard 
                                    title={item.title} 
                                    image={item.recipes.length != 0? item.recipes[0].image : 'https://media.istockphoto.com/id/1081090762/photo/super-food-for-a-healthy-diet.jpg?b=1&s=170667a&w=0&k=20&c=fP3wgrXD2w2NCaYidJSjCTsgr6_EOJVHjppJyvWz8bs='} 
                                    recipeCount={item.recipes.length} />}
        keyExtractor={item => item.id}
        style={{paddingHorizontal: 5}}
      />
    </View>
  );
}
