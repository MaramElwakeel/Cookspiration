import { ScrollView } from 'react-native';
import RecipesSearchBar from '../components/Common/RecipesSearchBar';
import Recipes from '../components/Common/Recipes';
import CollectionList from '../components/MyCookbook/CollectionList';

export default function MyCookbookScreen({data, toggleBookmark}) {
  // This filters the recipes to only those that are bookmarked.
  const bookmarkedRecipes = data.filter(recipe => recipe.isBookmarked);
  
  return (
    <ScrollView>
      <RecipesSearchBar data={bookmarkedRecipes} />
      <CollectionList />
      <Recipes data={bookmarkedRecipes} toggleBookmark={toggleBookmark}/>
    </ScrollView>
  );
}