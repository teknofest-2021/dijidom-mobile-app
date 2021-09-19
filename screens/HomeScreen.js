import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Modal,
  Pressable,
} from "react-native";
import Item from "../components/Item";
import {
  GetAllMeasurementByPlantID,
  GetLastMeasurement,
} from "../api/Requests";

export default function HomeScreen({ navigation }) {
  const [measurements, setMeasurements] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      GetLastMeasurement().then((result) => setMeasurements(result));
      console.log(measurements);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={measurements}
        keyExtractor={(item) => item.plantID.toString()}
        contentContainerStyle={{
          padding: 30,
        }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity>
              <Item
                title={item.plantName}
                imgSrc={
                  "https://media.istockphoto.com/photos/tomato-isolated-tomato-on-white-background-with-clipping-path-full-picture-id941825808?k=20&m=941825808&s=612x612&w=0&h=XD_4P1ppgnhxAQwWJNE1MO0MHJueW3uRvEs1nI1Gadw="
                }
              />
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
