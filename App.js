import { useState } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";

export default function App() {
  const [name, setName] = useState("");

  return (
    <ImageBackground
      style={styles.body}
      source={require("./assets/flowers.jpg")}
      resizeMode="cover"
    >
      <View>
        <Image
          source={require("./assets/danger.png")}
          resizeMode="center"
          style={styles.image}
          blurRadius={10}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",

  },
  image: {
    height: 100,
    width: 100,
  },

});
