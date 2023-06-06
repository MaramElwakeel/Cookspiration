import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { SearchBar } from 'react-native-elements';
import RecipeCard from './RecipeCard'; // Import your RecipeCard component

export default function RecipesSearchBar({ data }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    if(query) {
      const lowercasedQuery = query.toLowerCase();
      setFilteredRecipes(
        data.filter(recipe => recipe.title.toLowerCase().includes(lowercasedQuery))
      );
    } else {
      setFilteredRecipes([]);
    }
  }

  return (
    <View>
      <SearchBar
        placeholder="Search Recipes"
        onChangeText={onChangeSearch}
        value={searchQuery}
        round={true}
        inputStyle={{color: 'white'}}
        inputContainerStyle={{backgroundColor: 'black'}}
        containerStyle={{backgroundColor: null, borderBottomWidth: 0, borderTopWidth: 0, paddingTop: 50, paddingHorizontal: 10}}
      />
      
      {filteredRecipes.length > 0 ? (
        <FlatList
          data={filteredRecipes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RecipeCard recipe={item} showBookmarkIcon={false}/>}
        />
      ) : (
        <Text>No recipes found</Text>
      )}
    </View>
  );
};
