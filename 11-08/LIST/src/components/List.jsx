import { StyleSheet, Text, View } from 'react-native';

const List = ({ peopleList = []}) => {

  console.log(peopleList);
  return (
    <View>
      {
        peopleList.map(people => (
          <Text  style={styles.listItem}>
            name:{people.name} - idade:{people.idade}
          </Text>
        ))
      }
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    fontWeight: "bold",
    textAlign: 'center'
  },
});

export default List;