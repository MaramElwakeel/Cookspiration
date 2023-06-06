import { View, Text, StyleSheet, FlatList } from 'react-native';
import RecipeCard from '../Common/RecipeCard';

export default function Recipes({data, toggleBookmark}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', flexDirection: 'row', justifyContent: 'space-between', padding: 5}}>Recipes</Text>
      <FlatList                       // A FlatList for Recipes
        data={data}
        renderItem={({item}) => <RecipeCard key={item.id} recipe={item} toggleBookmark={toggleBookmark}/>}
        keyExtractor={item => item.id.toString()}
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
