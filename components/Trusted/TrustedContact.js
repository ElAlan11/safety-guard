import { ListItem, Avatar,useTheme,Divider } from "@rneui/themed";
import { TouchableOpacity,StyleSheet } from "react-native";
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";
import colors from '../assets/colors'

export default function TrustedContact({name,tel,id,image}) {
  const {theme} = useTheme();
  const navigation = useContext(NavigationContext);

  const editProfile = () => {
    navigation.navigate("TrustedEdit", { id ,name,tel,image});
  };

  return (
    <TouchableOpacity onPress={editProfile} >
      <ListItem containerStyle={{backgroundColor: theme.colors.white}}>
        <Avatar rounded source={{ uri: image }} size={45}/>
        <ListItem.Content >
          <ListItem.Title style={styles.text}>{name}</ListItem.Title>
          <ListItem.Subtitle style={styles.tel}>{tel}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron name="chevron-down" type="material-community"/>
      </ListItem>
      <Divider width={1} color={theme.colors.background}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text:{
    textTransform:'capitalize',
    fontFamily: 'Helvetica',
    fontSize: 18,
  },
  tel:{
    fontFamily: 'Helvetica',
    fontSize: 15,
    color: 'grey'
  }
})