import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';

export default function RecipePage({ route, navigation }) {
  const { recipe, toggleBookmark } = route.params;
  const { id, title, url, isBookmarked, cookingTime, serves, ingredients, steps} = recipe;
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={{uri: url}} style={{width: '100%', height: 250}} >
        {/* <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon
            name='arrow-back'
            type='ionicon'
            color='#000'
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookmarkButton} onPress={() => toggleBookmark(id)}>
          <Icon
            name={isBookmarked? 'ios-bookmark': 'ios-bookmark-outline'}
            type='ionicon'
            color='#000'
          />
        </TouchableOpacity> */}
      </ImageBackground>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.infoContainer}>
          <Text><Icon name='timer-outline' type='ionicon' /> {cookingTime}</Text>
          <Text><Icon name='restaurant-outline' type='ionicon' /> Serves: {serves}</Text>
        </View>
        <Text style={styles.subtitle}>Ingredients</Text>
        <View style={styles.ingredientsContainer}>
          {ingredients.map((ingredient, index) => <Text key={index}>{ingredient}</Text>)}
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.cookButton} onPress={() => navigation.navigate('CookingPage', {steps})}>
          <Text>Let's Cook!</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingTop: 50,
  },
  backButton: {
    position: 'absolute',
    marginTop: 40,
    left: 15
  },
  bookmarkButton: {
    position: 'absolute',
    marginTop: 45,
    right: 15
  },
  title: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 30,
    margin: 10,
  },
  infoContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  subtitle: {
    fontWeight: 'bold',
    color: "white",
    fontSize: 20,
    margin: 10,
  },
  ingredientsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 10,
  },
  scrollView: {
    marginVertical: 10,
  },
  cookButton: {
    backgroundColor: 'tomato',
    borderRadius: 30,
    padding: 15,
    margin: 20,
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
});

