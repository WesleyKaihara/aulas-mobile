import axios from 'axios';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const req = []


    for(let i=0;i<6;i++) {
      req.push(await axios.get("https://randomuser.me/api/"))
    }
    const data = await Promise.all(req)
    console.log("DATA",data[0]);

    setUsers([...users])
  }

  return (
    <View style={styles.container}>
      { users.map(user => {
        <Text>{user.name}</Text>
      })}

      <Button 
        title='Generate users' 
        onPress={fetchUsers}
      />
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
