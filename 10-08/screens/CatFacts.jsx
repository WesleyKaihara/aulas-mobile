import { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import MyButton from '../src/components/MyButton';
import axios from "axios"

const CatFacts = () => {
  const [catFact, setCatFact] = useState()


  const fetchCatFact = async () => {
    try {
      const {data} = await axios.get('https://catfact.ninja/fact')
      setCatFact(data.fact)
    } catch(error) {
      console.log(error)
    }
  }
  
  return (
    
    <SafeAreaView>
      <StatusBar/>
    <View style={styles.container}>
      <Text style={styles.container}>
        Cats facts
      </Text>
      <MyButton
        title="Fato aleatório sobre gatos" 
        onPressButton={fetchCatFact}/>
    <Text>{catFact ? catFact : ""}</Text>
    </View>
    </SafeAreaView>
  );
  }
  const styles = StyleSheet.create({
    container: {
    fontsize:12,
    color: '#fff',
    backgroundColor: '#88f',
    fontStyle: 'italic',
    alignItems:'center',
    justifyContent: 'center',
    height: 300
    }
  })


export default CatFacts;