import { StyleSheet, Text, View } from 'react-native';

const Header = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{ title }</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    padding: 20
  },
});


export default Header;