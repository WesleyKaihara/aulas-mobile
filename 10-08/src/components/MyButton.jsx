import { Button, Text, View } from 'react-native';

const MyButton = ({title, onPressButton}) => {
  
  return (
    <View>
      <Button title='new Fact'onPress={onPressButton}/>
    </View>
  );
}

export default MyButton;