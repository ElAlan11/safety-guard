import { View, StyleSheet, Text,KeyboardAvoidingView } from "react-native";
import { Input, Icon,Button,Dialog,makeStyles } from "@rneui/themed";
import {useState} from 'react'
import colors from "../components/assets/colors";

export default function ChangePassword({navigation}) {
  const [open,setOpen] = useState(false);
  const styles = useStyles();
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
        leftIcon={<Icon name="asterisk" type="font-awesome" size={24}  iconStyle={styles.icon} />}
        inputContainerStyle={styles.inputContainer}
        labelStyle={styles.label}
        errorStyle={{ height: 0 }}
        textContentType="password"
        inputMode="text"
        autoCapitalize="none"
        secureTextEntry
        label="Contraseña Anterior"
      ></Input>
      <Input
        placeholder="Contraseña"
        leftIcon={<Icon name="asterisk" type="font-awesome" size={24} iconStyle={styles.icon} />}
        labelStyle={styles.label}
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
        leftIcon={<Icon name="asterisk" type="font-awesome" size={24} iconStyle={styles.icon} />}
        labelStyle={styles.label}
        inputContainerStyle={styles.inputContainer}
        errorStyle={{ height: 0 }}
        textContentType="newPassword"
        inputMode="text"
        autoCapitalize="none"
        secureTextEntry
        label="Confirma tu contraseña"
      ></Input>
      <Button title="Confirmar" containerStyle={styles.btn} type="clear" onPress={handleChangePass}/>
      <Dialog isVisible={open} onBackdropPress={toggleOpen} overlayStyle={styles.dialog}>
        <Text style={styles.warning}>La cotraseña ha sido actualizada correctamente</Text>
        <Dialog.Actions>
          <Dialog.Button title="Cerrar" onPress={() => toggleClose()}/>
        </Dialog.Actions>
      </Dialog>
    </KeyboardAvoidingView>
  );
}

const useStyles = makeStyles((theme) => ({
  mainView: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    paddingTop: 15,
    backgroundColor: theme.colors.background
  },
  inputContainer:{
    backgroundColor:theme.colors.white,
    borderBottomWidth:0,
    borderRadius: 5,
    paddingLeft: 10,
    shadowColor: theme.colors.grey3,
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    marginTop:5
  },
  btn:{
    marginTop:10
  },
  icon:{
    color: theme.colors.primary,
    marginLeft:2,
    marginRight:2

  },
  title: {
    color: theme.colors.primary
  },
  warning:{
    color: theme.colors.grey0,
    fontSize:16
  },
  dialog:{
    backgroundColor: theme.colors.white,
  },
  label:{
    color: theme.colors.grey0,
    marginTop:5,
    marginBottom:2
  }
}));
