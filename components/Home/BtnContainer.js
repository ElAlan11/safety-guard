import { Button } from "react-bootstrap";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

export default function BtnContainer({ toggle }) {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}> Presioname si estas en peligro</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggle} opacity={0.8} style={styles.touchableOptions}>
          <Button style={styles.buttonHelp}>
            <Icon name="shield-alert" size={130} color="white" />
          </Button>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}></View>
    </>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    margin: 5,
  },
  title: {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
    fontSize: "35px",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
  buttonContainer: {
    flex: 2,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  touchableOptions: {
    flex: 1,
    height: "100%",
    width: "100%",
    alignItems: "center",
    padding: 30,
  },
  buttonHelp: {
    flex: 1,
    width: "80%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
    borderColor: "red",
    borderRadius: "50%",
    fontWeight: "bold",
    color: "white",
    borderStyle: "solid",
    borderColor: "white",
    borderWidth: 15,
  },
  footer: {
    flex: 1,
    margin: 5,
  },
});
