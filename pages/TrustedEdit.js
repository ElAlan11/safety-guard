import { Form, InputGroup, Button } from "react-bootstrap";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, StyleSheet } from "react-native";
import { Avatar } from "@rneui/themed";
import colors from "../components/assets/colors";
import { useState } from "react";

export default function TrustedEdit({ navigation, route }) {
  const [user, setUser] = useState(route.params);
  
  const editProfile = () => {
    navigation.goBack();
  };

  const cancel =() =>{
    navigation.goBack();
  }
  return (
    <View style={styles.mainView}>
      <Form style={styles.form}>
        <View style={styles.avatarContainer}>
          <Avatar rounded source={{ uri: user.image }} size={150} />
        </View>
        <Form.Group controlId="formBasicEmail">
          <InputGroup className="mb-2">
            <InputGroup.Text className="bg-white" id="basic-addon1" >
              <Icon name="account" size={30} color={colors.primary} />
            </InputGroup.Text>
            <Form.Control placeholder="Usuario" aria-label="Usuario" aria-describedby="basic-addon1" type="email" defaultValue={user.name} style={styles.mailText} />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <InputGroup>
            <InputGroup.Text id="basic-addon1" className="bg-white">
              <Icon name="phone" size={30} color={colors.primary} />
            </InputGroup.Text>
            <Form.Control placeholder="Número" aria-label="phoneNumber" aria-describedby="basic-addon1" type="tel" defaultValue={user.tel} />
          </InputGroup>
        </Form.Group>
        <View>
          <Button onClick={editProfile} style={styles.primaryButton}>
            Guardar
          </Button>
          <Button style={styles.secondaryButton} onClick={cancel}>
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
    backgroundColor: colors.primary,
    padding: 20,
  },
  secondaryButton: {
    backgroundColor: "white",
    marginTop: "3px",
    color: colors.primary,
    borderColor: "white",
  },
  primaryButton: { 
    borderStyle: "solid",
    backgroundColor: colors.primary, 
    borderColor: colors.primary, 
    fontWeight: "revert" 
  },

  form: {
    backgroundColor: "black",
    padding: 30,
    borderRadius: 10,
    backgroundColor: colors.blured,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: "30px",
  },
  mailText:{
    textTransform: 'capitalize',
  }
});
