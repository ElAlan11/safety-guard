import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import colors from "../components/assets/colors";
import { Input, Icon, Button, Avatar } from "@rneui/themed";

export default class ForgotPassword extends Component {
  static contextType = NavigationContext;

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    const submit = () =>{
      const navigation_ = this.context;
      navigation_.goBack();
    }
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.box}>
            <View style={styles.avatarContainer}>
              <Avatar rounded icon={{ name: "account-wrench" }} size={150} containerStyle={styles.avatar}/>
            </View>
            <Text style={styles.text}>Ingresa tu correo para recibir instrucciones</Text>
            <Input
              placeholder="Correo"
              leftIcon={<Icon name="envelope" type="font-awesome" size={24} color={colors.primary} />}
              inputContainerStyle={{ borderBottomWidth: 0 }}
              errorStyle={{ height: 0 }}
              containerStyle={styles.inputContainer}
              textContentType="emailAddress"
              inputMode="email"
              autoCapitalize="none"
            ></Input>
            <Button buttonStyle={styles.primaryButton} onPress={submit}>Enviar</Button>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  box: {
    backgroundColor: colors.blured,
    padding: 20,
    borderRadius: 10
  },
  primaryButton: {
    borderStyle: "solid",
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderRadius: 8,
    marginTop: 12,
  },
  inputContainer: {
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
  text: {
    marginBottom: 12,
    fontWeight: "500",
    fontSize: 14,
  },
  avatarContainer:{
    alignItems:'center'
  },
  avatar:{
    backgroundColor: colors.primary,
    marginBottom: 10
  }
});
