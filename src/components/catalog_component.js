import PokeCard from '../components/poke_card';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from "react";
import { getPokeListPage, getMethod } from '../services/poke_api';
import _ from "lodash";

export default function CatalogComponent({ navigation }) {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [data, setData] = useState({});
  const [paginationData, setPaginationData] = useState([]);

  useEffect(() => {
    fetchData(0);
  }, [])

  async function fetchData(pageNum) {
    setPaginationData([]);
    let detail = await getPokeListPage(pageNum);
    detail.results?.map(async (element, index) => {
      let temp = await getMethod(element.url);
      setPaginationData(prevArray => [...prevArray, temp]);
    })
    setData(detail);
    setTotalPage(Math.ceil(detail.count / 10)-1);
    setPage(pageNum);
  }

  return (
    <View style={styles.container}>
      {data &&
        data.results?.map((element, index) => {
          return (<View style={styles.item} key={element.name}>
            <PokeCard name={element.name} image={paginationData[index]?.sprites?.front_shiny} data={paginationData[index]} navigation={navigation} />
          </View>);
        })
      }
      <View style={styles.centered} >
        {page > 0 ?
          <Button style={styles.button} title='<<' onPress={() => fetchData(0)}></Button>
          :
          <View style={styles.button}></View>
        }
        {page > 0 ?
          <Button style={styles.button} title='<' onPress={() => fetchData(page - 1)}></Button>
          :
          <View style={styles.button}></View>
        }
        {_.times(5, (i) => {
          i = i - 2;
          if (i === 0) {
            return <Button key={page}
              style={styles.button}
              color={"#FFA500"}
              title={page}></Button>
          }
          if (i + page > 0 && i + page < totalPage) {
            return <Button key={page + i} style={styles.button} title={page + i} onPress={() => fetchData(page + i)}></Button>
          }
        })}
        {/* <Text style={styles.button}>{page}</Text> */}
        {page < totalPage ?
          <Button style={styles.button} title='>' onPress={() => fetchData(page + 1)}></Button>
          :
          <View style={styles.button}></View>
        }
        {page < totalPage ?
          <Button style={styles.button} title='>>' onPress={() => fetchData(totalPage)}></Button>
          :
          <View style={styles.button}></View>
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start'
  },
  item: {
    width: '50%',
    padding: 2,
  },
  centered: {
    margin: "auto",
    flexDirection: 'row',
    alignItems: 'flex-center'
  },
  button: {
    width: "30px",
    margin: "0 10px",
    textAlign: "center",
  },
  selected: {
    color: "orange"
  }
});