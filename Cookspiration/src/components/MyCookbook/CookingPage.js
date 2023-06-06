import React, { useState, useRef } from 'react';
import { Text, View, SafeAreaView, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function CookingPage({ route, navigation }) {
  const { steps } = route.params;
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  
  const renderItem = ({ item, index }) => {
    return (
      <View style={{
        backgroundColor: 'white',
        borderRadius: 5,
        height: '100%',
        padding: 30,
        marginLeft: 25,
        marginRight: 25,
      }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Step {index + 1}/{steps.length}</Text>
        <Text style={{marginTop:15, marginLeft: 10, fontSize: 20}}>{item}</Text>
        {index === steps.length - 1 &&
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{backgroundColor: 'tomato',
                          borderRadius: 30,
                          padding: 15,
                          fontSize: 15,
                          margin: 90,
                          alignSelf: 'center',}}>Done</Text>
          </TouchableOpacity>
        }
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, paddingVertical: 100 }}>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Carousel
          layout={"default"}
          ref={carouselRef}
          data={steps}
          sliderWidth={Dimensions.get('window').width}
          itemWidth={Dimensions.get('window').width}
          renderItem={renderItem}
          onSnapToItem={index => setActiveIndex(index)}
        />
      </View>
    </SafeAreaView>
  );
}
