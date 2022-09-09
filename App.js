import { useState } from "react";
import {
  Button,
  FlatList,
  Linking,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [items, setItems] = useState([
    { text: "1" },
    { text: "2" },
    { text: "3" },
    { text: "4" },
    { text: "4" },
    { text: "6" },
    { text: "7" },
    { text: "8" },
    { text: "9" },
    { text: "10" },
    { text: "11" },
  ]);
  const [refresh, seRefresh] = useState(false);

  const pageRefresh = () => {
    seRefresh(true);
    setItems([...items, { text: "12" }]);
    seRefresh(false);
    // };
  };
  return (
    <FlatList

      keyExtractor={(item, index) => index.toString()}
      data={items}
      renderItem={({ item }) => (
        <View style={styles.items}>
          <Text style={styles.items}>{item.text}</Text>
        </View>
      )}
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={pageRefresh} />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
  },
  items: {
    backgroundColor: "purple",
    margin: 10,
    padding: 20,
    maxWidth: "200",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
  },
});
