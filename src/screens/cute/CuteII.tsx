import React from "react";
import { Text, Image, StyleSheet, ScrollView, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");

export default function CuteII({ route }) {

  const { hero } = route.params;

  return (

    <LinearGradient
      colors={["#660505ff", "#000000"]}
      style={styles.gradient}
    >

      <ScrollView contentContainerStyle={styles.container}>

        <Image
          source={{ uri: `${hero.thumbnail.path}.${hero.thumbnail.extension}` }}
          style={styles.image}
          resizeMode="cover"
        />

        <Text style={styles.name}>{hero.name}</Text>

        <Text style={styles.desc}>
          {hero.description ? hero.description : "Sin descripción disponible."}
        </Text>
      </ScrollView>
    </LinearGradient>
  );

}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },

  container: {
    padding: 20,
    alignItems: "center",
  },

  image: {
    width: width * 0.9,
    height: 350,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 8, // sombra 
    shadowOpacity: 0.4,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },

  name: {
    fontSize: 38,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#fff",
    textAlign: "center",
    textShadowColor: "rgba(0,0,0,0.7)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },

  desc: {
    fontSize: 18,
    color: "#ddd",
    lineHeight: 24,
    textAlign: "justify",
  },

});
