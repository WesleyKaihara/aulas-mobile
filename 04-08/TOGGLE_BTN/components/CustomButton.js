import { Button, View } from 'react-native';

const CustomButton = ({ text }) => {
  return (
    <View>
      <Button title={text}/>
    </View>
  );
}

export default CustomButton;