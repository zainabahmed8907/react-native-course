import { useState } from "react";
import { Button, Linking, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {


  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text>1</Text>
      </View>
      <View style={styles.view2}>
        <Text>1</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "column",
    margin: 30,


  },
  view1: {
    width: "100%",
    padding: 10,
    backgroundColor: "yellow",
    flex: 1,
    height: '80%',
    borderColor: "red",
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",

  },
  view2: {
    width: "100%",
    padding: 10,
    backgroundColor: "green",
    flex: 2,
    height: '80%',
    borderColor: "blue",
    borderWidth: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10

  }

});
