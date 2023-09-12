import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

export default function SideBar({ toggle }) {
  const navigation = useContext(NavigationContext);
  const goToLogin = () => {
    toggle();
    navigation.navigate("Login");
  };

  const goToTrusted = () => {
    toggle();
    navigation.navigate("Trusted");
  };

  return (
    <TouchableOpacity style={styles.mainView} onPress={toggle}>
      <View></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "white",
  },
});
