import { Card } from "@rneui/themed";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {NavigationContext} from '@react-navigation/native'
import {useContext} from 'react'

export default function AlertCard({fecha,content,id}) {
  const navigation = useContext(NavigationContext);

  const togglenav = () => {
    navigation.navigate("CardView",{fecha,content})
  }

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={togglenav}>
      <Card containerStyle={styles.card}>
        <Card.Title>
          <Text>{fecha}</Text>
        </Card.Title>
        <Card.Divider />
        <Card.FeaturedSubtitle numberOfLines={7} style={{ color: "black" }}>
          {content}...
        </Card.FeaturedSubtitle>
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 8,
    marginBottom: 8,
    height: 200,
    maxHeight: 200,
    borderRadius: 15,
    shadowColor: 'rgb(209, 209, 209)',
    shadowOffset: {width: -2, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
});
