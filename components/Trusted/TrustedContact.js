import { ListItem, Avatar } from "@rneui/themed";
import { TouchableOpacity } from "react-native";
import { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

export default function TrustedContact() {
  const navigation = useContext(NavigationContext);

  const editProfile = () => {
    navigation.navigate("TrustedEdit", { id: "2" });
  };

  return (
    <TouchableOpacity onPress={editProfile}>
      <ListItem bottomDivider>
        <Avatar rounded source={{ uri: "https://randomuser.me/api/portraits/men/36.jpg" }} />
        <ListItem.Content>
          <ListItem.Title>John Doe</ListItem.Title>
          <ListItem.Subtitle>President</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </TouchableOpacity>
  );
}
