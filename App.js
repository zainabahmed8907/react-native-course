import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  Linking,
  Modal,
  Pressable,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  //modal warnign
  const [showWarning, setshowWarning] = useState(false);
  const onPressHandler = () => {
    if (name.length > 3) {
      setSubmitted(!submitted);
    } else {
      setshowWarning(true);

      // Alert.alert("Warning", "Name Length must be greater than 3", [
      //   {
      //     text: "OK", onPress: () => console.warn("OK button pressed"),
      //   }
      // ], {
      //   cancelable: true,
      //   onDismiss: () => console.warn("Alert Dismissed")
      // })
    }
  };
  return (
    <View style={styles.body}>
      <Text>Enter your name:{name}</Text>
      <TextInput
        onChangeText={(name) => setName(name)}
        style={styles.textInput}
      />

      <Modal visible={showWarning} onRequestClose={() => setshowWarning(false)} >
        <View style={styles.view_warning_modal}>
          <View style={styles.warning_modal}>
            <View style={styles.warning_modal_title}>
              <Text style={{ fontSize: 20, margin: 10 }}>Warning!!</Text>
            </View>
            <Text style={{ padding: 20, textAlign: "center" }}>The Name must be longer than 3 characters</Text>
          </View>
        </View>
      </Modal>

      <Pressable
        style={styles.touchable}
        onPress={onPressHandler}
        hitSlop={{ top: 100, right: 10, bottom: 10, left: 10 }}
        android_ripple={{ color: "purple" }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>
          {name.length === 0 ? "Submit" : "OK"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    fontWeight: "600",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    width: "70%",
    fontSize: 15,
    padding: 10,
    margin: 10,
  },
  touchable: {
    backgroundColor: "green",
    padding: 10,
    margin: 30,
    width: "50%",
    collor: "purple",
  },
  warning_modal: {
    width: 300,
    height: 300,

    backgroundColor: "white",
    borderWidth: 10,
    borderColor: "#000",
    borderRadius: 20,
  },

  view_warning_modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  warning_modal_title: {
    height: 50,
    alignContent: "center",
    alignItems: "center",
    backgroundColor: "brown"
  }
});
