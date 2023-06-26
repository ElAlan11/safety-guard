import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Stack, Col, Row } from "react-bootstrap";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function SideBar({ toggle,login,trusted }) {
  return (
    <View style={styles.container_menu}>
      <Stack style={styles.bodyMenu}>
        <Row style={styles.w_100}>
          <Col>
            <TouchableOpacity onPress={toggle}>
              <View>
                <Icon name="close" size={24} color="#7c7c7c" />
              </View>
            </TouchableOpacity>
          </Col>
          <Col>
            <View style={styles.center}>
              <Text>Logo</Text>
            </View>
          </Col>
          <Col></Col>
        </Row>
        <Row style={styles.row_menu}>
          <TouchableOpacity onPress={trusted} style={styles.animatedBox}>
            <Text style={styles.txt_menu}>
              <Icon
                name="account-group-outline"
                size={26}
                color="#7c7c7c"
                style={styles.pr_1}
              />
              Contactos de confianza
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={toggle} style={styles.animatedBox}>
            <Text style={styles.txt_menu}>
              <Icon
                name="account-alert-outline"
                size={26}
                color="#7c7c7c"
                style={styles.pr_1}
              />
              Mis alertas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.animatedBox} onPress={login}>
            <Text style={styles.txt_menu}>
              <Icon
                name="exit-to-app"
                size={24}
                color="#7c7c7c"
                style={styles.pr_1}
              />
              Cerrar Sesion
            </Text>
          </TouchableOpacity>
        </Row>
      </Stack>
    </View>
  );
}

const styles = StyleSheet.create({
  pr_1: {
    paddingRight: "1rem",
  },
  w_100: {
    width: "100%",
  },
  center: {
    textAlign: "center",
    alignItems: "center",
  },
  container_menu: {
    flex: 1,
    backgroundColor: "#112146f2",
    justifyContent: "center",
    height: "100%",
    width: "100vw",
    zIndex: 10,
  },
  txt_menu: {
    color: "#7c7c7c",
    fontWeight: "400",
    fontSize: "12pt",
    paddingLeft: "15px",
    paddingTop: "15px",
    paddingBottom: "15px",
  },
  animatedBox: {
    //borderBottomColor: "#BABABA",
    //borderBottomWidth: "2px",
    padding: 0,
    alignContent: "center",
    justifyContent: "center",
  },
  bodyMenu: {
    //flex: 1,
    width: "100%",
    height: '100%',
    alignItems: "center",
    justifyContent: "start",
    backgroundColor: "#ffffff",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  row_menu: {
    marginTop: "2rem",
    width: "100%",
  },
});
