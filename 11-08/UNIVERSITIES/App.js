import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import University from './components/University';

export default function App() {
  const [data, setData] = useState()

  useEffect(async() => {
    const response = await axios
      .get("http://universities.hipolabs.com/search?country=Brazil")
    setData(response.data)
  },[])

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {data && data.map((university,idx) => (
          <University 
            key={idx}
            name={university.name} 
            url={university?.web_pages[0]}/>
        ))}
      </ScrollView>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40
  },
});
