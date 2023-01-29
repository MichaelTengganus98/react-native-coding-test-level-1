import { StyleSheet, Text, View, Image } from 'react-native';
import { useState, useEffect } from "react";

const PokeDetail = ({ route }) => {
  const [rotate, setRotate] = useState(0);
  const [image, setImage] = useState([]);

  useEffect(() => {
    setImage(
      [route.params?.sprites?.front_shiny, route.params?.sprites?.back_shiny,
      route.params?.sprites?.front_default, route.params?.sprites?.back_default,]
    );

    let counter = 0;
    const intervalId = setInterval(() => {
      setRotate(counter++ % 4);
    }, 2000)

    return () => clearInterval(intervalId);
  }, [])

  function renderRow(data) {
    return (
      <Text key={data.ability.name}>{`\u2022 ${data.ability.name}`}</Text>
    );
  }

  return (
    <View style={styles.centeredView}>
      <Text style={{ textTransform: 'capitalize' }}>{route.params?.name}</Text>
      <Image
        key={route.params?.sprites?.front_shiny}
        style={styles.frontShiny}
        source={{
          uri: image[rotate]
        }}
      />
      <Text>abilities</Text>
      {route.params?.abilities?.map((element) => {
        return renderRow(element);
      })}
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


export { PokeDetail };