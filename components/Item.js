import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
const FontSize = require("../assets/styles/fonts/FontSize");

const TOMATO_IMG = require("../assets/tomato.png");
const ICON_SIZE = FontSize.normalizeFont(24);

export default function Item({ data }) {
  return (
    <View style={styles.item}>
      <View style={styles.itemTitleView}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            resizeMode="cover"
            source={TOMATO_IMG}
            style={{ width: ICON_SIZE, height: ICON_SIZE, marginRight: "5%" }}
          />
          <Text style={styles.itemText}>{data.plantName}</Text>
        </View>
        <MaterialIcons name="navigate-next" size={ICON_SIZE} color="red" />
      </View>
      <View style={styles.itemBodyView}>
        <Text style={styles.itemText}>Türü: {data.typeName}</Text>
        <Text style={styles.itemText}>Boyu: {data.plantHeight}cm</Text>
        <View
          style={{ width: "90%", height: 1, backgroundColor: "tomato" }}
        ></View>
        <Text style={styles.itemText}>
          Hava Kalitesi: {data.airQuality} g/m^3
        </Text>
        <Text style={styles.itemText}>
          Hava Sıcaklığı: {data.airTemperature}°C
        </Text>
        <Text style={styles.itemText}>Hava Nem Oranı: {data.airHumidity}%</Text>
        <View
          style={{ width: "90%", height: 1, backgroundColor: "tomato" }}
        ></View>
        <Text style={styles.itemText}>
          Toprak Sıcaklığı: {data.soilTemperature}°C
        </Text>
        <Text style={styles.itemText}>
          Toprak Nem Oranı: {data.airHumidity}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
  },
  itemTitleView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemBodyView: {
    marginTop: "5%",
    justifyContent: "center",
  },
  itemText: {
    fontSize: FontSize.normalizeFont(14),
  },
});
