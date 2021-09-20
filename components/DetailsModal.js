import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button } from "react-native";
import ModalBox from "react-native-modalbox";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const FontSize = require("../assets/styles/fonts/FontSize");
const RADIUS = 10;

export default function DetailsModal({ open, closeModal, datas }) {
  return (
    <ModalBox
      isOpen={open}
      onClosed={closeModal}
      position={"bottom"}
      entry={"bottom"}
      style={styles.modal}
      backButtonClose={true}
    >
      <View style={styles.closeButtonView}>
        <TouchableOpacity style={styles.modalButton} onPress={closeModal}>
          <AntDesign name="close" size={FontSize.normalizeFont(24)} color="#FFF" />
        </TouchableOpacity>
      </View>
      <View style={styles.modalBodyView}></View>
    </ModalBox>
  );
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: "#FFF",
    borderTopRightRadius: RADIUS,
    borderTopLeftRadius: RADIUS
  },
  closeButtonView: {
    flex: 1,
    backgroundColor: "tomato",
    justifyContent: "center",
    borderTopRightRadius: RADIUS,
    borderTopLeftRadius: RADIUS
  },
  modalBodyView: {
    flex: 9,
    alignItems: "center",
    justifyContent: "center",
  },
  modalButton: {
    alignSelf: "flex-end",
    marginRight: "5%"
  },
});
