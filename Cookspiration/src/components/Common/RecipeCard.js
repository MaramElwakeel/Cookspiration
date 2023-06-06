import React from "react";
import { useNavigation } from '@react-navigation/native';
import { View, Text } from "react-native";
import { Card, Icon } from 'react-native-elements'

export default function RecipeCard({recipe, toggleBookmark, showBookmarkIcon = true}) {
  const navigation = useNavigation();
  const { id, title, url, isBookmarked } = recipe;

  return (
    <View style={{padding: 10}}> 
      <View style={{position: 'relative'}}>
        <Card.Image
          source={{uri: url}}
          containerStyle={showBookmarkIcon? {height: 110, width: 160, borderRadius: 10}: {height: 73, width: 190, borderRadius: 10, alignSelf: 'center'}}
          onPress={() => navigation.navigate('RecipePage', {recipe, toggleBookmark, navigation })}
        />
        {showBookmarkIcon && 
          <Icon
            name={isBookmarked? 'ios-bookmark': 'ios-bookmark-outline'}
            type='ionicon'
            color='#fff'
            containerStyle={{position: 'absolute', top: 5, right: 5}}
            onPress={() => toggleBookmark(id)}
          />
        }
      </View>
      <Text style={showBookmarkIcon? {alignSelf: 'flex-start', fontWeight: 'bold', color: 'white'} : {color: 'white', fontSize: 13, alignSelf: 'center'}}>
        {title}
      </Text>  
    </View>
  )
}
