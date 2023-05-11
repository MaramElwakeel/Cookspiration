import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function CollectionCard({ title, image, recipeCount }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.count}>{recipeCount} recipes</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
    height: 100, // adjust as needed
    margin: 5,
  },
  image: {
    width: 100, // adjust as needed
    height: '100%',
  },
  textContainer: {
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 14,
    color: '#888',
  },
});



// export default function CollectionCard({ title, recipeCount }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <Text style={styles.count}>{recipeCount} recipes</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginBottom: 10,
//     height: 100, // adjust as needed
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   count: {
//     fontSize: 14,
//     color: '#888',
//   },
// });
