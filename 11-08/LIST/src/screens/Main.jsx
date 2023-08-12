import { Text, View } from 'react-native';
import List from '../components/List';
import Header from '../components/Header';

const Main = () => {
  const peopeList = [
    { 
      name: "Fulano", 
      idade: 20 }, 
    { 
      name: "Beltrano", 
      idade: 22 
    }, 
    { 
      name: "Ciclano", 
      idade: 19 
    }, 
    { 
      name: "Jhon Doe", 
      idade: 30 
    }
  ]

  return (
    <View>
      <Header title={"People List"}/>
      <List peopleList={peopeList} />
    </View>
  );
}

export default Main;