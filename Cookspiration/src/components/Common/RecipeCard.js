import React, { useState} from "react";
import { View, Text } from "react-native";
import { Card, Icon } from 'react-native-elements'

export default function RecipeCard(props) {
  const [isBookmarked, setBookmarked] = useState(false);

  return (
    <View style={{padding: 10}}>
      <View style={{position: 'relative'}}>
        <Card.Image
          source={{uri: props.url}}
          containerStyle={{height: 110, width: 160, borderRadius: 10}}
        />
        <Icon
          name={isBookmarked? 'ios-bookmark': 'ios-bookmark-outline'}
          type='ionicon'
          color='#fff'
          containerStyle={{position: 'absolute', top: 5, right: 5}}
          onPress={() => setBookmarked(!isBookmarked)}
        />
      </View>
      <Text style={{alignSelf: 'flex-start', fontWeight: 'bold', color: 'white'}}>
        {props.title}
      </Text>  
    </View>
  )
}