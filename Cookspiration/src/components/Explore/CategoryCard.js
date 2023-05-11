import React from "react";
import { View, Text } from "react-native";
import { Card } from 'react-native-elements'

export default function CategoryCard(props) {
  return (
    <View style={{padding: 5}}>
      <Card.Image
        source={{uri: props.url}}
        containerStyle={{height: 110, width: 110, borderRadius: 10}}
      />  
      <Text style={{alignSelf: 'center', fontWeight: 'bold', color: 'white'}}>
        {props.title}
      </Text>  
    </View>
  )
}