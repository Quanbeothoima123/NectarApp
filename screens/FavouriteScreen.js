import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function FavouriteScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Favourite Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "#181725",
  },
});
