import axios from 'axios';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Card = ({ background }) => {
  const [data,setData] = useState()

  const catFechAPI = async() => {
    const { data } = await axios.get("https://catfact.ninja/fact")
    setData(data)
  }

  return (
    <View>
      <TouchableOpacity 
        onPress={catFechAPI} 
        style={{
          backgroundColor: background, ...styles.card
        }}
    >
          <Text>{data && data.fact}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 300,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
});

export default Card;
