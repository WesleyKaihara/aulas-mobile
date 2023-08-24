import { FlatList, SafeAreaView, Text, View } from 'react-native';

const pokemonData = [
  {
    name: "Pikachu",
    element: "Eletric"
  },
  {
    name: "Charmander",
    element: "Fire"
  }
]

const PokemonItem = ({ pokemon }) => {
  const { name, element } = pokemon

  return (
    <View>
      <Text>Pokemon</Text>
      <Text>name: {name}</Text>
      <Text>element: {element}</Text>
    </View>
  )
}

const ListPage = () => {
  return (
    <SafeAreaView>
      <FlatList 
        data={pokemonData}
        renderItem={({item}) => <PokemonItem pokemon={item}/> }
      />
    </SafeAreaView>
  );
}

export default ListPage;