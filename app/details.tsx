import { View } from 'react-native';
import { Appbar, Card, Text } from 'react-native-paper';
import { useRouter } from 'expo-router'; // DODAJ TO

export default function DetailsScreen() {
    const router = useRouter(); // DODAJ TO

    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => router.back()} />
                <Appbar.Content title="Szczegóły" />
            </Appbar.Header>
            <View style={{ padding: 16 }}>
                <Card>
                    <Card.Title title="Zamek Królewski" />
                    <Card.Content>
                        <Text>Opis miejsca, notatki, lokalizacja...</Text>
                    </Card.Content>
                </Card>
            </View>
        </>
    );
}
