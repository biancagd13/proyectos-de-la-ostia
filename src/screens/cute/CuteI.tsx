import React, { useEffect, useState } from "react";
import { View, Image, FlatList, ActivityIndicator, StyleSheet, Dimensions } from "react-native";
import { getMarvelHeroes } from "../../api/cuteApi";
import CuteCard from "../../components/CuteCard";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = (width - 30) / 2; // Ajuste para dos columnas con margen

export default function CuteI({ navigation }) {

  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const loadHeroes = async () => {

    setLoading(true);
    const data = await getMarvelHeroes(page * 20);
    setHeroes((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    loadHeroes();
  }, [page]);

  const renderItem = ({ item }) => (

    <CuteCard
      hero={item}
      onPress={() => navigation.navigate("CuteII", { hero: item })}
      style={{ width: ITEM_WIDTH, margin: 5 }}
      showDescription={true} // para mostrar descripción si existe
    />
  );

  return (
    <View style={styles.container}>

      <Image
        source={require("../../../assets/mar.jpg")}
        style={styles.logo}
        resizeMode="contain"
      />

      <FlatList
        data={heroes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        numColumns={2} // Dos columnas
        key={2} // Fuerza render fresco para columnas
        onEndReached={() => setPage((prev) => prev + 1)}
        onEndReachedThreshold={0.5}
        ListFooterComponent={loading && <ActivityIndicator size="large" color="red" />}
      />

    </View>
  );

}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: "#000000ff" },
  logo: {
    width: "100%",
    height: 150, 
    marginBottom: 15,
  },
});
