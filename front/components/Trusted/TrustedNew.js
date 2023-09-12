import { ListItem, Avatar,useTheme,Divider,Icon } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

export default function TrustedNew() {
  const navigation = useContext(NavigationContext);
  const {theme} = useTheme();
  const editProfile = () => {
    navigation.navigate("TrustedEdit", {});
  };
    return(
        <TouchableOpacity onPress={editProfile}>
        <ListItem containerStyle={{backgroundColor: theme.colors.white}} >
          <Icon name="add-circle-outline" size={45} color={theme.colors.primary}/>
          <ListItem.Content>
            <ListItem.Title>Añadir nuevo contacto</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <Divider width={1} color={theme.colors.background}/>
      </TouchableOpacity>
    )
};
