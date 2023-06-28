import { Form, InputGroup, Button } from "react-bootstrap";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, StyleSheet } from "react-native";
import { Avatar } from "@rneui/themed";
import mainColor from "../components/assets/colors";

export default function TrustedEdit({ navigation, route }) {
  const editProfile = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.mainView}>
      <Form style={styles.card}>
        <View style={styles.avatarContainer}>
          <Avatar rounded source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }} size={150} />
        </View>
        <Form.Group controlId="formBasicEmail">
          <InputGroup className="mb-3">
            <InputGroup.Text className="bg-white" id="basic-addon1">
              <Icon name="account" size={24} color="#7c7c7c" />
            </InputGroup.Text>
            <Form.Control placeholder="Usuario" aria-label="Usuario" aria-describedby="basic-addon1" type="email" />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <InputGroup>
            <InputGroup.Text id="basic-addon1" className="bg-white">
              <Icon name="phone" size={24} color="#7c7c7c" />
            </InputGroup.Text>
            <Form.Control placeholder="Número" aria-label="phoneNumber" aria-describedby="basic-addon1" type="tel" />
          </InputGroup>
        </Form.Group>
        <View>
          <Button onClick={editProfile} style={{ backgroundColor: mainColor.primary, borderColor: mainColor.primary, fontWeight: "revert" }}>
            Agregar
          </Button>
          <Button style={styles.secondaryButton} onClick={editProfile}>
            Cancelar
          </Button>
        </View>
      </Form>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: mainColor.primary,
    padding: 20,
  },
  secondaryButton: {
    backgroundColor: "white",
    borderStyle: "solid",
    marginTop: "2px",
    color: mainColor.primary,
    borderColor: "white",
  },
  card: {
    backgroundColor: "black",
    padding: 30,
    borderRadius: 10,
    backgroundColor: "rgba(255,255,255,.6)",
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: "30px",
  },
});
