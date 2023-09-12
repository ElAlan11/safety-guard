import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from "react-native";
import colors from "../components/assets/colors";
import { useState } from "react";
import { Input, Icon, Button, Avatar, makeStyles, Dialog } from "@rneui/themed";
import * as ImagePicker from "expo-image-picker";

export default function TrustedEdit({ navigation, route }) {
  const [user, setUser] = useState(route.params);
  const [image, setImage] = useState(null);
  const [edit, setEdit] = useState(false);
  const [dialog, setDialog] = useState(false);
  const styles = useStyles();
  const togglePress = () => {
    user.name && edit && setDialog(true);
    user.name && setEdit(true);
  };
  const toggleDialog = () => {
    setDialog(!dialog);
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const cancel = () => {
    navigation.goBack();
  };
  return (
    <>
      <Icon
        name="chevron-down"
        type="font-awesome"
        size={24}
        containerStyle={styles.chevronContainer}
        iconStyle={styles.chevronIcon}
      />
      <View style={styles.mainView}>
        <KeyboardAvoidingView style={styles.form} behavior="padding">
          <View style={{ padding: 30 }}>
            <Avatar
              rounded
              source={{ uri: image ? image : user.image }}
              size={150}
              containerStyle={styles.avatarContainer}
            >
              <Avatar.Accessory
                size={45}
                onPress={async (e) => {
                  await pickImage();
                }}
                style={styles.avatarAccessory}
              />
            </Avatar>
            <View>
              <Input
                placeholder="Nombre"
                leftIcon={
                  <Icon
                    name="user"
                    type="font-awesome"
                    size={24}
                    iconStyle={styles.inputIcon}
                  />
                }
                inputContainerStyle={{ borderBottomWidth: 0 }}
                errorStyle={{ height: 0 }}
                labelStyle={{ height: 0 }}
                containerStyle={styles.inputContainer}
                textContentType="name"
                defaultValue={user.name}
                inputMode="text"
                autoCapitalize="sentences"
                disabled={!edit && user.name}
              ></Input>
              <Input
                placeholder="Telefono"
                leftIcon={
                  <Icon
                    name="phone"
                    type="font-awesome"
                    size={24}
                    iconStyle={styles.inputIcon}
                  />
                }
                inputContainerStyle={{ borderBottomWidth: 0 }}
                errorStyle={{ height: 0 }}
                labelStyle={{ height: 0 }}
                containerStyle={styles.inputContainer}
                textContentType="telephoneNumber"
                defaultValue={user.tel}
                inputMode="numeric"
                disabled={!edit && user.name}
              ></Input>
            </View>
            <View>
              <Button buttonStyle={styles.primaryButton} onPress={togglePress}>
                {user.name ? (edit ? "Guardar" : "Editar") : "Añadir"}
              </Button>
              <Button
                buttonStyle={styles.secondaryButton}
                onPress={cancel}
                type="outline"
              >
                Cancelar
              </Button>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
      <Dialog
        isVisible={dialog}
        onBackdropPress={toggleDialog}
        overlayStyle={styles.dialog}
      >
        <Text style={styles.message}>
          El contacto ha sido guardado correctamente
        </Text>
        <Dialog.Actions>
          <Dialog.Button title="Cerrar" onPress={() => navigation.goBack()} />
        </Dialog.Actions>
      </Dialog>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  chevronContainer: {
    backgroundColor: theme.colors.white,
  },
  chevronIcon: {
    color: theme.colors.primary,
  },
  mainView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: theme.colors.white,
    padding: 20,
  },
  avatarContainer: {
    backgroundColor: theme.colors.grey3,
    alignSelf: "center",
    marginBottom: 30,
  },
  avatarAccessory: {
    backgroundColor: theme.colors.primary,
  },
  secondaryButton: {
    marginTop: 3,
    borderRadius: 8,
    
  },
  primaryButton: {
    borderColor: theme.colors.primary,
    borderRadius: 8,
    marginTop: 10,
  },
  form: {
    borderRadius: 10,
    backgroundColor: theme.colors.background,
  },
  inputContainer: {
    backgroundColor: theme.colors.white,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 10,
    marginBottom: 10,
  },
  inputIcon: {
    color: theme.colors.primary,
  },
  message: {
    color: theme.colors.grey0,
    fontSize: 16,
  },
  dialog: {
    backgroundColor: theme.colors.white,
  },
}));
