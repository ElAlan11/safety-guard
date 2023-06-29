import { View, StyleSheet } from "react-native";
import colors from "../components/assets/colors";
import { useState } from "react";
import { Input, Icon, Button, Avatar } from "@rneui/themed";

export default function TrustedEdit({ navigation, route }) {
  const [user, setUser] = useState(route.params);

  const editProfile = () => {
    navigation.goBack();
  };

  const cancel = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.mainView}>
      <View style={styles.form}>
        <View style={styles.avatarContainer}>
          <Avatar rounded source={{ uri: user.image }} size={150} />
        </View>
        <View>
          <Input placeholder="Nombre" leftIcon={<Icon name="user" type="font-awesome" size={24} color={colors.primary} />} inputContainerStyle = {{borderBottomWidth: 0,}} errorStyle={{height: 0}} labelStyle={{height: 0}} containerStyle={styles.inputContainer}  textContentType="name"  defaultValue={user.name} inputMode="text"></Input>
          <Input placeholder="Telefono" leftIcon={<Icon name="phone" type="font-awesome" size={24} color={colors.primary} />} inputContainerStyle = {{borderBottomWidth: 0}} errorStyle={{height: 0}} labelStyle={{height: 0}} containerStyle={styles.inputContainer}  textContentType="telephoneNumber" defaultValue={user.tel} inputMode="tel"></Input>
        </View>
        <View>
          <Button buttonStyle={styles.primaryButton} onPress={editProfile} >Agregar</Button>
          <Button buttonStyle={styles.secondaryButton} titleStyle={{color: colors.primary}} onPress={cancel} >Cancelar</Button>
        </View>
      </View>
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
    marginTop: 3,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 8
  },
  primaryButton: {
    borderStyle: "solid",
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderRadius: 8,
    marginTop: 10
  },

  form: {
    backgroundColor: "black",
    padding: 30,
    borderRadius: 10,
    backgroundColor: colors.blured,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  mailText: {
    textTransform: "capitalize",
  },
  inputContainer:{
    backgroundColor:'white',
    alignItems:'center',
    flexDirection:'row',
    borderRadius:10,
    marginBottom: 10,
    
  }
});
