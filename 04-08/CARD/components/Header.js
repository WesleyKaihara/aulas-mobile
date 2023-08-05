import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView style={style.header}>
      <Text style={style.headerText}>TDE - 04/08</Text>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  header: {
    backgroundColor: "tomato",
    padding: 30
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold"
  }
})

export default Header;