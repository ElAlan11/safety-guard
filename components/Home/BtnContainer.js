import { TouchableOpacity, StyleSheet} from "react-native";
import { Avatar } from "@rneui/themed";

export default function BtnContainer({handlePressHelp}) {
  return (
    <TouchableOpacity onPress={handlePressHelp}> 
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
