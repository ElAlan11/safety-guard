import { Card,ThemeProvider,Button ,useTheme} from "@rneui/themed";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {NavigationContext} from '@react-navigation/native'
import {useContext} from 'react'


export default function AlertCard({fecha,content,id}) {
  const { theme } = useTheme();

  const navigation = useContext(NavigationContext);

  const togglenav = () => {
    navigation.navigate("CardView",{fecha,content})
  }

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={togglenav}>
      <Card containerStyle={{shadowColor: theme.colors.grey4}}>
        <Card.Title>
          <Text>{fecha}</Text>
        </Card.Title>
        <Card.Divider />
        <Card.FeaturedSubtitle numberOfLines={7} style={{ color: theme.colors.black }}>
          {content}...
        </Card.FeaturedSubtitle>
      </Card>
    </TouchableOpacity>
  );
}

