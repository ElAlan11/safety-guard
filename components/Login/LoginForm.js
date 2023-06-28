import { Button, Form, InputGroup } from "react-bootstrap";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StyleSheet, View, Text } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import { useContext } from "react";
import colors from '../assets/colors'

export default function LoginForm() {
  const navigation = useContext(NavigationContext);
  const handleView = (view) => {
    navigation.navigate(view);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.logoContainer}>
        <Text>Logo</Text>
      </View>
      <View style={styles.formContainer}>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <InputGroup className="mb-3">
              <InputGroup.Text className="bg-white" id="basic-addon1">
                <Icon name="email" size={24} color="#7c7c7c" />
              </InputGroup.Text>
              <Form.Control placeholder="Usuario" aria-label="Usuario" aria-describedby="basic-addon1" type="email" />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <InputGroup>
              <InputGroup.Text id="basic-addon1" className="bg-white">
                <Icon name="lock" size={24} color="#7c7c7c" />
              </InputGroup.Text>
              <Form.Control placeholder="Contraseña" aria-label="password" aria-describedby="basic-addon1" type="password" />
            </InputGroup>
          </Form.Group>
        </Form>
      </View>
      <View style={styles.forgotPassword}>
        <a
          onClick={(e) => {
            e.preventDefault();
            handleView("ForgotPassword");
          }}
        >
          <Form.Text style={styles.link} className="text-muted">
            ¿Haz olvidado tu contraseña?
          </Form.Text>
        </a>
      </View>
      <Button
        style={styles.button}
        variant="secondary"
        onClick={(e) => {
          e.preventDefault();
          handleView("Home");
        }}
      >
        Iniciar Sesión
      </Button>
      <a
        style={styles.register}
        onClick={(e) => {
          e.preventDefault();
          handleView("Register");
        }}
      >
        <Form.Text className="text-muted" style={styles.link}>
          ¿Aún no tienes una cuenta?
        </Form.Text>
        <Text style={[styles.link, { fontWeight: "bold" }]}>Regístrate</Text>
      </a>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    padding: 10,
  },
  formContainer: {
    flex: 1,
  },
  button: {
    marginTop: 10,
    backgroundColor: colors.primary
  },
  forgotPassword: {
    alignItems: "flex-end",
  },
  register: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 5,
  },
  link: {
    cursor: "pointer",
    textDecorationLine: "underline",
  },
  logoContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
