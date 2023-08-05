import { useEffect, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';

import Card from './components/Card';
import Header from './components/Header';
export default function App() {
  return (
    <View>
      <Header/>
      <SafeAreaView style={style.container}>
        <Card 
          title={"Tomate"}
          content={"O tomate é um fruto rico em vitamina C, vitamina A, vitamina K e licopeno, que é um potente antioxidante, ajudando a manter a saúde da pele, fortalecer o sistema imunológico e evitar doenças cardiovasculares, como infarto e aterosclerose."}
        />
      </SafeAreaView>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 20
  },
  title: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 30
  }
})