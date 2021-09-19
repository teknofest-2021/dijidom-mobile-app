import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

export default function Item({ title, imgSrc }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}>
          <Image resizeMode="cover" source={{uri: imgSrc}} style={{height: "100%", width: "100%"}} />
        </View>
        <Text style={styles.itemText}>{title}</Text>
      </View>
      <MaterialIcons name="navigate-next" size={24} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: .3,
    shadowRadius: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: {
    width: 24,
    height: 24,
    borderRadius: 5,
    marginRight: 15,
  },
  itemText: {
    maxWidth: "80%",
  },
});
