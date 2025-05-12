import { View, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { Appbar, Card, FAB, Text } from 'react-native-paper';

const places = [
  { id: '1', title: 'Zamek Królewski' },
  { id: '2', title: 'Stare Miasto' },
  { id: '3', title: 'Pałac Kultury' }
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <>
      <Appbar.Header>
        <Appbar.Content title="City Explorer" />
      </Appbar.Header>
      <FlatList
        data={places}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10 }}
        renderItem={({ item }) => (
          <Card
            style={{ marginBottom: 10 }}
            onPress={() => router.push('/details')}
          >
            <Card.Title title={item.title} />
          </Card>
        )}
      />
      <FAB
        icon="plus"
        label="Dodaj miejsce"
        style={{
          position: 'absolute',
          right: 16,
          bottom: 16
        }}
        onPress={() => router.push('/edit')}
      />
    </>
  );
}
