import React, { useState } from "react";
import { View, Text, Button, FlatList, Pressable, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AddPlaceModal from "../components/ui/AddPlaceModal";

export default function HomeScreen() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [places, setPlaces] = useState([
        { id: "1", name: "Rynek", city: "Daleszyce", description: "Historyczne centrum miasta", imageName: "rynek" },
        { id: "2", name: "Mała kadzielnia", city: "Górno", description: "Mała skałka i punkt widokowy", imageName: "kadzielnia" },
        { id: "3", name: "Kapliczka", city: "Bieliny", description: "Zabytkowa kapliczka na rozdrożu", imageName: "kapliczka" },
    ]);

    const handleAddPlace = (name, city, description, imageName) => {
        setPlaces((prev) => [...prev, {
            id: Date.now().toString(),
            name,
            city,
            description,
            imageName
        }]);

        setModalVisible(false); // zamyka modal

        setTimeout(() => {
            Alert.alert("Dodano miejsce!", "Miejsce zostało dodane pomyślnie.");
        }, 300);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista miejsc</Text>
            <FlatList
                data={places}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Pressable
                        style={styles.item}
                        onPress={() => navigation.navigate("Details", { place: item })}
                    >
                        <Text style={styles.placeName}>{item.name}</Text>
                        <Text style={styles.placeCity}>{item.city}</Text>
                    </Pressable>
                )}
            />

            <Button title="Dodaj nowe" onPress={() => setModalVisible(true)} />
            <AddPlaceModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                onSave={handleAddPlace}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        backgroundColor: "#fff",
    },
    title: {
        fontSize: 20,
        marginBottom: 10,
        fontWeight: "bold",
        textAlign: "center",
    },
    item: {
        padding: 15,
        backgroundColor: "#f1f1f1",
        marginBottom: 10,
        borderRadius: 6,
    },
    placeName: {
        fontWeight: "bold",
        fontSize: 16,
    },
    placeCity: {
        color: "#666",
    },
});
