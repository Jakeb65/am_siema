import { useState } from 'react';
import { View } from 'react-native';
import { Appbar, TextInput, Button } from 'react-native-paper';
import { useRouter } from 'expo-router'; // DODAJ TO

export default function EditScreen() {
    const [title, setTitle] = useState('');
    const router = useRouter(); // DODAJ TO

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => router.back()} />
                <Appbar.Content title="Dodaj / Edytuj" />
            </Appbar.Header>
            <View style={{ padding: 16 }}>
                <TextInput
                    label="Nazwa miejsca"
                    value={title}
                    onChangeText={setTitle}
                    style={{ marginBottom: 20 }}
                />
                <Button mode="contained" onPress={() => {
                    console.log('Zapisano:', title);
                    router.back(); // ← ZAMIANA
                }}>
                    Zapisz
                </Button>
            </View>
        </>
    );
}
