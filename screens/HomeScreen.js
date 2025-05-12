import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen - Lista miejsc</Text>
      <Button title="Szczegóły" onPress={() => navigation.navigate("Details")} />
      <Button title="Dodaj nowe" onPress={() => navigation.navigate("Edit")} />
    </View>
  );
}
