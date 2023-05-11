import { ScrollView } from 'react-native';
import RecipesSearchBar from '../components/Common/RecipesSearchBar';
import Recipes from '../components/Common/Recipes';
import CollectionList from '../components/MyCookbook/CollectionList';

export default function MyCookbookScreen() {
  return (
    <ScrollView>
      <RecipesSearchBar />
      <CollectionList />
      <Recipes />
    </ScrollView>
  );
}