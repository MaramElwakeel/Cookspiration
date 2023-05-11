import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import CategoryCard from './CategoryCard';

// Placeholder data
const DATA = [
  {
    id: '1',
    title: 'Chicken',
    url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7p7VsEHal8e0iIfTBz4bPuqMji4lGoWphVQ&usqp=CAU',
    // other properties...
  },
  {
    id: '2',
    title: 'Pasta',
    url: 'https://www.tastingtable.com/img/gallery/30-types-of-pasta-and-when-you-should-be-using-them/l-intro-1659010210.jpg',
    // other properties...
  },
  {
    id: '3',
    title: 'Healthy',
    url: 'https://media.self.com/photos/5ea1ac5927bb4e00087e0632/1:1/w_1600%2Cc_limit/mango-black-bean-salad.jpg',
    // other properties...
  },
  {
    id: '4',
    title: 'Beef',
    url: 'https://www.foodandwine.com/thmb/20Fp26wbzSMgOtCdCZy0vpIK8Mo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/garlic-butter-prime-rib-FT-RECIPE0621-fca73e5fa8e046b0b03982757db51628.jpg',
    // other properties...
  },
  {
    id: '5',
    title: 'Soup',
    url: 'https://thefoodcharlatan.com/wp-content/uploads/2021/09/Easy-Potato-Soup-Recipe-11.jpg',
    // other properties...
  },
  {
    id: '6',
    title: 'Seafood',
    url: 'https://www.simplyrecipes.com/thmb/2GMHFcWEHZGOYbT4eoVCAu2uwsw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2018__07__Seafood-Paella-LEAD-VERTICAL-fc5f1e71baa8484cafa1a106ffaa9c23.jpg',
    // other properties...
  },
  // more categories...
];

export default function CategoryCarousel() {
  const renderSeeAllButton = () => {
    // Add your navigation or action handler here
    console.log('See All pressed');
  };

  return (
    <View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>Top Categories</Text>
        <TouchableOpacity onPress={renderSeeAllButton}>
          <Text style={{fontSize: 16, color: 'white', backgroundColor: 'blue', borderRadius: 10, padding: 5}}>See All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={DATA}
        renderItem={({ item }) => <CategoryCard title={item.title} url={item.url} />}
        keyExtractor={item => item.id}
        style={{paddingHorizontal: 5}}
      />
    </View>
  );
}
