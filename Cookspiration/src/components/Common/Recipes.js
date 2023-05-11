import { View, Text, StyleSheet, FlatList } from 'react-native';
import RecipeCard from '../Common/RecipeCard';

// Placeholder data
const DATA = [
  {
    id: '1',
    title: 'Lasagne',
    url: 'https://img.taste.com.au/SLzZj5ac/w720-h480-cfill-q80/taste/2010/01/our-favourite-lasagne-118950-2.jpg',
    // other properties...
  },
  {
    id: '2',
    title: 'Chicken and Vegetable Stir-Fry',
    url: 'https://img.taste.com.au/_c1oK4CI/w720-h480-cfill-q80/taste/2015/07/basic-chicken-and-vegetable-stirfry_1980x1320-117899-1.jpg',
    // other properties...
  },
  {
    id: '3',
    title: 'Butter Chicken',
    url: 'https://img.taste.com.au/ZLg6vu22/w720-h480-cfill-q80/taste/2016/11/easy-butter-chicken-74432-1.jpeg',
    // other properties...
  },
  {
    id: '4',
    title: 'Carbonara',
    url: 'https://img.taste.com.au/bxgUmhJx/w720-h480-cfill-q80/taste/2016/12/the-best-carbonara-recipe-185091-2.jpg',
    // other properties...
  },
  {
    id: '5',
    title: 'Beef Nachos',
    url: 'https://img.taste.com.au/y9pxnfpY/w720-h480-cfill-q80/taste/2016/11/beef-nachos_1980x1320-118400-1.jpg',
    // other properties...
  },
  {
    id: '6',
    title: 'Beef Strangof',
    url: 'https://img.taste.com.au/5UkOyKWT/w720-h480-cfill-q80/taste/2016/11/beef-stroganoff-45838-1.jpeg',
    // other properties...
  },
  {
    id: '7',
    title: 'Quiche',
    url: 'https://img.taste.com.au/NPadfZm_/w720-h480-cfill-q80/taste/2016/11/impossible-quiche-24036-1.jpeg',
    // other properties...
  },
  {
    id: '8',
    title: 'Sheperd\'s Pie',
    url: 'https://img.taste.com.au/k6isj2RE/w720-h480-cfill-q80/taste/2010/01/classic-shepherds-pie_1980x1320-118395-1.jpg',
    // other properties...
  },
  {
    id: '9',
    title: 'Pumpkin Soup',
    url: 'https://img.taste.com.au/lNSYKI_b/w720-h480-cfill-q80/taste/2010/01/best-easy-pumpkin-soup-recipe-185570-1.jpg',
    // other properties...
  },
  {
    id: '10',
    title: 'Stuffed Grape Leaves',
    url: 'https://www.fifteenspatulas.com/wp-content/uploads/2013/09/Stuffed-Grape-Leaves-Dolmas-1.jpg',
    // other properties...
  },
  {
    id: '11',
    title: 'Creamy Mushroom Orzo',
    url: 'https://www.dontgobaconmyheart.co.uk/wp-content/uploads/2020/06/creamy-mushrooms-orzo-1.jpg',
    // other properties...
  },
  // more categories...
];

export default function Recipes() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 5}}>Recipes</Text>
      <FlatList                       // A FlatList for Recipes
        data={DATA}
        renderItem={({item}) => <RecipeCard title={item.title} url={item.url}/>}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}} // This will provide space between cards
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
