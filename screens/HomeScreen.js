import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  View,
} from "react-native";
import Item from "../components/Item";
import DetailsModal from "../components/DetailsModal";
import {
  GetAllMeasurementDateByPlantID,
  GetLastMeasurement,
} from "../api/Requests";

export default function HomeScreen({ navigation }) {
  const [measurements, setMeasurements] = useState([]);
  const [plantID, setPlantID] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      GetLastMeasurement().then((result) => setMeasurements(result));
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "100%", height: "100%" }}>
        <FlatList
          style={{ flex: 1 }}
          data={measurements}
          keyExtractor={(item) => item.plantID.toString()}
          contentContainerStyle={{
            padding: 30,
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setPlantID(item.plantID);
                  openModal()
                }}
              >
                <Item data={item} />
              </TouchableOpacity>
            );
          }}
        />
        <DetailsModal
          open={modalOpen}
          closeModal={closeModal}
          plantID={plantID}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
