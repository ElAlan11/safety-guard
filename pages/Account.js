import SettingsItem from "../components/Settings/SettingsItem";
import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { Dialog } from "@rneui/themed";
import colors from '../components/assets/colors'
export default function Account() {
  const [open, SetOpen] = useState(false);

  const toggleOpen = () => {
    SetOpen(!open);
  };
  const closeSesion = () => {
    SetOpen(!open);
  }
  return (
    <View style={styles.mainView}>
      <SettingsItem type="Cambiar contraseña" icon="lock" view="ChangePassword"/>
      <SettingsItem type="Cerrar sesión" icon="logout" view={toggleOpen} />
      <View style={styles.deleteF}>
        <SettingsItem type="Eliminar Cuenta" icon="delete-forever" view="DeleteAccount"/>
      </View>
      <Dialog isVisible={open} onBackdropPress={toggleOpen}>
        <Dialog.Title title="Cerrar sesión" />
        <Text>¿Estas seguro de querer cerrar sesión?</Text>
        <Dialog.Actions>
          <Dialog.Button titleStyle={{color:'red'}} title="Cerrar Sesión" onPress={() => toggleOpen()}/>
          <Dialog.Button  titleStyle={{color:colors.primary}} title="Regresar" onPress={() => closeSesion()} />
        </Dialog.Actions>
      </Dialog>
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 30,
  },
  deleteF: {
    paddingTop: 30,
  },
});
