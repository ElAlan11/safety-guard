import { ListItem, Avatar } from "@rneui/themed";
import { TouchableOpacity,StyleSheet } from "react-native";
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";
import colors from '../assets/colors'

export default function TrustedContact({name,tel,id,image}) {
  const navigation = useContext(NavigationContext);

  const editProfile = () => {
    navigation.navigate("TrustedEdit", { id ,name,tel,image});
  };

  return (
    <TouchableOpacity onPress={editProfile} >
      <ListItem containerStyle={{borderColor: colors.primary}} bottomDivider>
        <Avatar rounded source={{ uri: image }} size={50}/>
        <ListItem.Content >
          <ListItem.Title style={styles.text}>{name}</ListItem.Title>
          <ListItem.Subtitle style={styles.tel}>{tel}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron name="chevron-down" type="material-community"/>
      </ListItem>
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