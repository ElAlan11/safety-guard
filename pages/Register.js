import React, { Component } from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, KeyboardAvoidingView } from "react-native";
import { NavigationContext } from "@react-navigation/native";
import colors from "../components/assets/colors";
import { Input, Icon, Button, Avatar } from "@rneui/themed";

export default class Register extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    const cancelView = () => {
      const navigation_ = this.context;
      navigation_.goBack();
    };
    const submit = () => {
      const navigation_ = this.context;
      navigation_.goBack();
    }
    //Nombre,Apellido,Telefono,Usuario,Contraseña,Confirma tu contraseña
    return (
      
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}>
          <View style={styles.mainView}>
            <View style={styles.card}>
              <View style={styles.avatarContainer}>
                <Avatar rounded icon={{ name: "home-account" }} size={150} containerStyle={styles.avatar} />
              </View>
              <Input
                placeholder="Nombre"
                leftIcon={<Icon name="user" type="font-awesome" size={24} color={colors.primary} />}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                errorStyle={{ height: 0 }}
                labelStyle={{ height: 0 }}
                containerStyle={styles.inputContainer}
                textContentType="givenName"
                inputMode="text"
              ></Input>
              <Input
                placeholder="Apellido"
                leftIcon={<Icon name="user" type="font-awesome" size={24} color={colors.primary} />}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                errorStyle={{ height: 0 }}
                labelStyle={{ height: 0 }}
                containerStyle={styles.inputContainer}
                textContentType="familyName"
                inputMode="text"
              ></Input>
              <Input
                placeholder="Telefono"
                leftIcon={<Icon name="phone" type="font-awesome" size={24} color={colors.primary} />}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                errorStyle={{ height: 0 }}
                labelStyle={{ height: 0 }}
                containerStyle={styles.inputContainer}
                textContentType="telephoneNumber"
                inputMode="numeric"
              ></Input>
              <Input
                placeholder="Correo"
                leftIcon={<Icon name="envelope" type="font-awesome" size={24} color={colors.primary} />}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                errorStyle={{ height: 0 }}
                labelStyle={{ height: 0 }}
                containerStyle={styles.inputContainer}
                textContentType="emailAddress"
                inputMode="email"
                autoCapitalize="none"
              ></Input>
              <Input
                placeholder="Contraseña"
                leftIcon={<Icon name="asterisk" type="font-awesome" size={24} color={colors.primary} />}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                errorStyle={{ height: 0 }}
                labelStyle={{ height: 0 }}
                containerStyle={styles.inputContainer}
                textContentType="newPassword"
                inputMode="text"
                autoCapitalize="none"
                secureTextEntry
              ></Input>
              <Input
                placeholder="Confirmar contraseña"
                leftIcon={<Icon name="asterisk" type="font-awesome" size={24} color={colors.primary} />}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                errorStyle={{ height: 0 }}
                labelStyle={{ height: 0 }}
                containerStyle={styles.inputContainer}
                textContentType="newPassword"
                inputMode="text"
                autoCapitalize="none"
                secureTextEntry
              ></Input>
              <Button buttonStyle={styles.primaryButton} onPress={submit}>Registrar</Button>
              <Button buttonStyle={styles.secondaryButton} titleStyle={{color: colors.primary}} onPress={cancelView}>Cancelar</Button>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: colors.blured,
    padding: 20,
    borderRadius: 10,
  },
  inputContainer: {
    backgroundColor: "white",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,
  },
  avatar: {
    backgroundColor: colors.primary,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  primaryButton: {
    borderStyle: "solid",
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderRadius: 10,
    marginTop: 10,
    padding: 10
  },
  secondaryButton: {
    backgroundColor: "white",
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    padding: 8,
    marginTop:2
  },
});
