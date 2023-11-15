import React, { useState } from 'react';
import { View, Text, Image, FlatList} from 'react-native';
import { CheckBox } from 'react-native-elements';

const vegetables = [
  { 
    //  image: require('../assets/carrot.png'),
     name: 'Carrot', 
      checked: false 
  },

  {   
    // image: require('../assets/broccoli.png'), 
      name: 'Broccoli',
     checked: false 
    
    },
  {  name: 'Tomato', 
  // image: require('../assets/tomato.png'), 
  checked: false },
  // Add more vegetables here...
];

export default function GroceriesPage () {
  const [data, setData] = useState(vegetables);

  const handleCheck = (id) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setData(updatedData);
  };

  const renderItem = ({ item }) => (
    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
      <Image source={item.image} style={{ width: 1, height: 50, }} />
      <Text style={{color: 'white'}}>{item.name}</Text>
      <CheckBox
        checked={item.checked}
        onPress={() => handleCheck(item.id)}
        containerStyle={{ marginLeft: 240 }}
      />
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={data}
        renderItem={renderItem}
        
      />
    </View>
  );
};