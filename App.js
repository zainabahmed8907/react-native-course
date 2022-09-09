import { useState } from "react";
import {
  Button,
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
    { key: 1, text: "1" },
    { key: 2, text: "2" },
    { key: 3, text: "3" },
    { key: 4, text: "4" },
    { key: 5, text: "4" },
    { key: 6, text: "6" },
    { key: 7, text: "7" },
    { key: 8, text: "8" },
    { key: 9, text: "9" },
    { key: 10, text: "10" },
    { key: 11, text: "11" },
  ]);
  const [refresh, seRefresh] = useState(false);

  const pageRefresh = () => {
    seRefresh(true);
    setItems([...items, { key: 12, text: "added Item 12" }]);
    seRefresh(false);
  };
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={pageRefresh} refreshing={refresh} />
        }
      >
        {items.map((item) => {
          return (
            <View key={item.key} style={styles.items}>
              <Text style={item.text}>{item.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
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
  },
  text: {
    color: "white",
    fontSize: 20,
    fontStyle: "italic",
  },
});
