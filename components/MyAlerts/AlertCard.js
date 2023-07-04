import { Card } from "@rneui/themed";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function AlertCard({fecha,content,id}) {
  return (
    <TouchableOpacity style={{ flex: 1 }}>
      <Card containerStyle={styles.card}>
        <Card.Title>
          <Text>{fecha}</Text>
        </Card.Title>
        <Card.Divider />
        <Card.FeaturedSubtitle numberOfLines={7} style={{ color: "black" }}>
          {content}
        </Card.FeaturedSubtitle>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 5,
    marginBottom: 5,
    height: 200,
    maxHeight: 200,
    borderRadius: 15
  },
});
