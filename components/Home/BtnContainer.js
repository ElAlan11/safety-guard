import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import { Input, Icon, Button, Avatar } from "@rneui/themed";
import colors from "../assets/colors";

export default function BtnContainer({}) {
  return (
    <TouchableOpacity>

      <Avatar
        rounded
        icon={{ name: "report", type: "material" }}
        size={250}
        containerStyle={styles.avatar}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: "red",
    borderWidth: 10,
    borderColor: "white",
    marginTop: 20,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
