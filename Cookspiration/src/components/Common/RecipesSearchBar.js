import React from 'react';
import { SearchBar } from 'react-native-elements';

export default function RecipesSearchBar() {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = (query) => {
    setSearchQuery(query);
    // console.log(searchQuery)
  }

  return (
    <SearchBar
      placeholder="Search Recipes"
      onChangeText={onChangeSearch}
      value={searchQuery}
      round={true}
      inputStyle={{color: 'white'}}
      inputContainerStyle={{backgroundColor: 'black'}}
      containerStyle={{backgroundColor: null, borderBottomWidth: 0, borderTopWidth: 0, paddingTop: 50, paddingHorizontal: 10}}
    />
  );
};