import { StyleSheet, TouchableOpacity } from "react-native";
import { View } from "react-native";
import { Icon } from "@rneui/themed";
import colors from "../assets/colors";

export default function HeaderMenu({ open, toggle }) {
  

  return (
      <View style={styles.body}>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.menuIcon} onPress={toggle}>
            <Icon name="menu" size={24} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.logo}>
            <Icon
              name="user"
              type="font-awesome"
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.return}>
            <Icon
              name="user"
              type="font-awesome"
              size={24}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  body: {
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 10,
  },
  iconContainer: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 10,
  },
  menuIcon: {
    flex: 1,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  return: {
    flex: 1,
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
  },
});
