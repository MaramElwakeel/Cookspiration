import React from 'react';
import { View, Text, ScrollView, FlatList } from 'react-native';
import RecipesSearchBar from '../components/Common/RecipesSearchBar';
import CategoryCarousel from '../components/Explore/CategoryCarousel';
import Recipes from '../components/Common/Recipes';

export default function ExploreScreen({data, toggleBookmark}) {
  return (
    <ScrollView>
      <RecipesSearchBar data={data} />
      <CategoryCarousel />
      <Recipes data={data} toggleBookmark={toggleBookmark} />
    </ScrollView>
  );
}