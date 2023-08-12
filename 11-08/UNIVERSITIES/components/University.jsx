import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const University = ({name, url}) => {

  const onPress = () => Linking.canOpenURL(url).then(() => {
      Linking.openURL(url);
  });

  return (
    <View style={styles.universityItem}>
      <Text>{name}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.link}>{url}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  universityItem: {
    padding: 10
  },
  link: {
    color: "#00f"
  }
});

export default University;