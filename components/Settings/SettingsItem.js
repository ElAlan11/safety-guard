import { TouchableOpacity } from "react-native";
import { Icon, ListItem,Divider } from "@rneui/themed";
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";
import {useTheme} from '@rneui/themed'
import colors from "../assets/colors";

export default function SettingsItem({ icon, type, view }) {
  const {theme} = useTheme();
  const navigation = useContext(NavigationContext);
  
  const goToView = () => {
    typeof view === "string" ? navigation.navigate(view) : view(); //Verifica si View es string o function
  };
  return (
    <TouchableOpacity onPress={goToView}>
      <ListItem containerStyle={{ paddingLeft: 15, backgroundColor: theme.colors.white }} >
        <Icon name={icon} color="white" size={20} iconStyle={{ padding: 5, borderRadius: 5, backgroundColor: colors.primary }} />
        <ListItem.Content>
          <ListItem.Title>{type}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
      <Divider width ={1} color={theme.colors.background}/>
    </TouchableOpacity>
  );
}
