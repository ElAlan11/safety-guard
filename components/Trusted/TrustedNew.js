import { ListItem, Avatar } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";
import colors from '../assets/colors'

export default function TrustedNew() {
  const navigation = useContext(NavigationContext);

  const editProfile = () => {
    navigation.navigate("TrustedEdit", {});
  };
    return(
        <TouchableOpacity onPress={editProfile}>
        <ListItem containerStyle={{borderColor: colors.primary}} bottomDivider>
          <Avatar rounded icon={{name: 'add',type:'material'}} size={50} containerStyle={{backgroundColor:colors.primary}}/>
          <ListItem.Content >
            <ListItem.Title >Añadir nuevo contacto</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    )
};
