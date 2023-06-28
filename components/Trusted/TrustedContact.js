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
    <TouchableOpacity onPress={editProfile}  >
      <ListItem containerStyle={{backgroundColor: colors.blured, borderRadius: 10,marginBottom:'5px'}}>
        <Avatar rounded source={{ uri: image }} size={50}/>
        <ListItem.Content >
          <ListItem.Title style={styles.text}>{name}</ListItem.Title>
          <ListItem.Subtitle style={styles.text}>{tel}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text:{
    textTransform:'capitalize',
    fontFamily: 'Helvetica',
    fontSize: '18px'
  }
})