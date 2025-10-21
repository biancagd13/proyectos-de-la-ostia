import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const PokedexHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require('./../../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>Pokedex</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
     borderWidth: 1,
     borderColor: 'red',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginBottom: 5,
    borderWidth: 1, 
    borderColor: 'blue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});