import { ListItem, Avatar } from "@rneui/themed";
import { TouchableOpacity } from "react-native";

export default function TrustedContact() {
  return (
    <TouchableOpacity>
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
