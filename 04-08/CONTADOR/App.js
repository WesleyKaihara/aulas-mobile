import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [value,setValue] = useState(0)
  return (
    <View style={style.container}>
      <Text style={style.title}>{value}</Text>
      <Button 
        style={style.btn}
        title='+1' 
        onPress={() => setValue(value+1)}
      />
      <Button 
        style={style.btn}
        title='-1' 
        onPress={() => setValue(value-1)}
      />
      <Button 
        style={style.btn}
        title='Zerar' 
        onPress={() => setValue(0)}
      />
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    textAlign: "center",
    marginBottom: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 30,
    gap: 15
  }
});
