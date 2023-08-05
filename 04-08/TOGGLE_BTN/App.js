import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [showText, setShowText ] = useState(false)
  
  return (
    <View style={styles.container}>
      {
        showText && <Text>Hello World</Text>
      }
      <Button title='Clique aqui' onPress={() => setShowText(!showText)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
