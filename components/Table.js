import React from "react";
import { View, Text, StyleSheet } from "react-native";

const RADIUS = 10;

export default function Table({ title, columns, datas }) {
  return (
    <View style={styles.container}>
      <View style={styles.tableView}>
        <View style={styles.tableTitleView}></View>
        <View style={styles.tableBodyView}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tableView: {
    height: "90%",
    width: "90%",
    backgroundColor: "#FFF",
    borderRadius: RADIUS,
  },
  tableTitleView: {
    flex: 1,
    backgroundColor: "#959595",
    borderTopLeftRadius: RADIUS,
    borderTopRightRadius: RADIUS
  },
  tableBodyView: { flex: 9 },
});
