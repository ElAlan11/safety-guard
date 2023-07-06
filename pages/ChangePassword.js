import { View, StyleSheet, Text,KeyboardAvoidingView } from "react-native";
import { Input, Icon,Button,Dialog } from "@rneui/themed";
import {useState} from 'react'
import colors from "../components/assets/colors";

export default function ChangePassword({navigation}) {
  const [open,setOpen] = useState(false);
  const handleChangePass = () =>{
    toggleOpen();
  }
  const toggleOpen = () =>{
    setOpen(!open);
  }
  const toggleClose = () =>{
    toggleOpen();
    navigation.goBack();
  }
  return (
    <KeyboardAvoidingView style={styles.mainView} behavior="padding">
      <Input
        placeholder="Contraseña"
        leftIcon={<Icon name="asterisk" type="font-awesome" size={24} color={colors.primary} />}
        inputContainerStyle={styles.inputContainer}
        errorStyle={{ height: 0 }}
        textContentType="password"
        inputMode="text"
        autoCapitalize="none"
        secureTextEntry
        label="Contraseña Anterior"
      ></Input>
      <Input
        placeholder="Contraseña"
        leftIcon={<Icon name="asterisk" type="font-awesome" size={24} color={colors.primary} />}
        inputContainerStyle={styles.inputContainer}
        errorStyle={{ height: 0 }}
        textContentType="newPassword"
        inputMode="text"
        autoCapitalize="none"
        secureTextEntry
        label="Nueva contraseña"
      ></Input>
      <Input
        placeholder="Contraseña"
        leftIcon={<Icon name="asterisk" type="font-awesome" size={24} color={colors.primary} />}
        inputContainerStyle={styles.inputContainer}
        errorStyle={{ height: 0 }}
        textContentType="newPassword"
        inputMode="text"
        autoCapitalize="none"
        secureTextEntry
        label="Confirma tu contraseña"
      ></Input>
      <Button title="Confirmar" containerStyle={styles.btn} type="clear" onPress={handleChangePass}/>
      <Dialog isVisible={open} onBackdropPress={toggleOpen} style={{borderRadius: 20}} animationType="fade">
        <Text style={{fontSize:16}}>La cotraseña ha sido actualizada correctamente</Text>
        <Dialog.Actions>
          <Dialog.Button  titleStyle={{color:colors.primary}} title="Cerrar" onPress={() => toggleClose()}/>
        </Dialog.Actions>
      </Dialog>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    marginTop: 10
  },
  inputContainer:{
    backgroundColor:'white',
    borderBottomWidth:0,
    borderRadius: 10,
    paddingLeft: 10,
    shadowColor: 'rgb(209, 209, 209)',
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.6,
    shadowRadius: 6,
    marginTop:5
  },
  btn:{
    marginTop:5
  }
});
