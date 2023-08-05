import { Image, StyleSheet, Text, View } from 'react-native';

const Card = ({title, content, imageUrl}) => {
  return (
    <View>
      <Text style={style.title}>{title}</Text>
      <Image
        style={style.img}
        source={require('../assets/tomate.jpeg')}
      />
      <Text style={style.content}>{content}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center'
  },   
  content: {
    textAlign: 'justify'
  },
  img: {
    width: 360,
    height:300,
    resizeMode: 'contain'
  }
})

export default Card;