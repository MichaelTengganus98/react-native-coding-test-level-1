import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function PokeCard({ name, data, navigation }) {
  return (
    <View style={styles.centeredView}>
      <Text style={{ textTransform: 'capitalize' }}>{name}</Text>
      <Text></Text>
      <Image
        key={data?.sprites?.front_shiny}
        style={styles.frontShiny}
        source={{
          uri: data?.sprites?.front_shiny
        }}
      />
      <Button onPress={() => navigation.navigate('Poke Detail', data)} title={"View"}></Button>
    </View >
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    border: "solid black 1px",
    borderRadius: "12px",
  },
  frontShiny: {
    width: 200,
    height: 200,
  }
});
