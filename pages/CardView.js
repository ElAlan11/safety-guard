import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useState } from "react";
import colors from "../components/assets/colors";
import { Icon } from "@rneui/themed";

export default function CardView({ route, navigation }) {
  const [content, setContent] = useState(route.params); //{fecha,content}
  const goBack = () =>{
    navigation.goBack();
  }
  return (
    <>
      <Icon name="chevron-down" type="font-awesome" size={24} color="white" containerStyle={{ backgroundColor: colors.primary, paddingTop: 10 }} onPress={goBack} />
      <ScrollView style={styles.mainView}>
        <View style={styles.titleContainer}>
          <Text>{content.fecha}</Text>
        </View>
        <View style={styles.container}>
          <Text>{content.content}</Text>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.primary,
  },
  titleContainer: {
    width: "100%",
    backgroundColor: colors.blured,
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
  },
  container: {
    backgroundColor: colors.blured,
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
  },
});
