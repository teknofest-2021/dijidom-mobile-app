import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import AmbientsScreen from "./screens/AmbientsScreen";
import PlantsScreen from "./screens/PlantsScreen";
import SoilsScreen from "./screens/SoilsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Drawer.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          drawerContentStyle: { marginTop: "10%" },
          drawerActiveTintColor: "red",
        }}
      >
        <Drawer.Screen
          name="HomeScreen"
          options={{ title: "Ana Sayfa" }}
          component={HomeScreen}
        />
        <Drawer.Screen
          name="PlantsScreen"
          options={{ title: "Bitkiler" }}
          component={PlantsScreen}
        />
        <Drawer.Screen
          name="AmbientScreens"
          options={{ title: "Ortamlar" }}
          component={AmbientsScreen}
        />
        <Drawer.Screen
          name="SoilsScreen"
          options={{ title: "Topraklar" }}
          component={SoilsScreen}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
