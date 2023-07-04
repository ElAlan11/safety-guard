import { TouchableOpacity } from 'react-native'
import {Icon,ListItem} from '@rneui/themed'
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";
import colors from '../assets/colors'

export default function SettingsItem({ icon, type, view }) {
    const navigation = useContext(NavigationContext);
    const goToView=()=>{
        navigation.navigate(view)
    }
  return (
    <TouchableOpacity onPress={goToView}>
      <ListItem containerStyle={{ borderColor: colors.primary,paddingLeft:15 }} bottomDivider >
        <Icon name={icon} color='white'  size={20} iconStyle={{padding:5, borderRadius:5,backgroundColor:colors.primary}}/>
        <ListItem.Content>
          <ListItem.Title>{type}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    </TouchableOpacity>
  );
}
