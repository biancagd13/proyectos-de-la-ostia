import React, { useRef, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet, Dimensions, Animated } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = (width - 30) / 2; // Ajuste para dos columnas

export default function CuteCard({
  hero,
  onPress,
  style,
  showDescription,
  bgColor = ["#a81212", "#000000"],
}) {
  const imageUrl = `${hero.thumbnail.path}/portrait_uncanny.${hero.thumbnail.extension}`;

  // Animación de opacidad (parpadeo)
  const fadeAnim = useRef(new Animated.Value(5)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.7, // se aclara un poco
          duration: 1500,
          useNativeDriver: true,
        }),
        
        Animated.timing(fadeAnim, {
          toValue: 1, // vuelve a su opacidad normal
          duration: 1500,
          useNativeDriver: true,
        }),

      ])
    ).start();
  }, [fadeAnim]);

  return (
    <TouchableOpacity
      style={[styles.card, style]}
      onPress={onPress}
      activeOpacity={0.6}
    >
      <LinearGradient colors={bgColor} style={styles.gradient}>
        <Animated.Image
          source={{ uri: imageUrl }}
          style={[styles.image, { opacity: fadeAnim }]}
          resizeMode="cover"
        />
        <Text style={styles.idName}>
          #{hero.id} {hero.name}
        </Text>
        {showDescription && hero.description ? (
          <Text style={styles.description} numberOfLines={4}>
            {hero.description}
          </Text>
        ) : null}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 12,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  gradient: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  image: {
    width: ITEM_WIDTH - 20,
    height: ITEM_WIDTH - 20,
    borderRadius: 10,
    marginBottom: 8,
  },
  idName: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
    color: "#ddd",
  },
});
