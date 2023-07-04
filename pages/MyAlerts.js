import { View, Text, StyleSheet, FlatList, ScrollView } from "react-native";
import AlertCard from "../components/MyAlerts/AlertCard";

export default function MyAlerts() {
  const pruebaArray = 
  [
    {
        id: '1',
        fecha: '10-03-2020',
        content: "Amet voluptate ipsum reprehenderit nisi reprehenderit minim consequat velit fugiat elit veniam labore eiusmod aliqua."
    },    
    {
        id: '2',
        fecha: '11-03-2020',
        content: "Amet voluptate ipsum reprehenderit nisi reprehenderit minim consequat velit fugiat elit veniam labore eiusmod aliqua."
    },    
    {
        id: '3',
        fecha: '12-03-2020',
        content: "Amet voluptate ipsum reprehenderit nisi reprehenderit minim consequat velit fugiat elit veniam labore eiusmod aliqua."
    },
    {
        id: '4',
        fecha: '13-03-2020',
        content: "Amet voluptate ipsum reprehenderit nisi reprehenderit minim consequat velit fugiat elit veniam labore eiusmod aliqua."
    },

  ];
  return (
    <FlatList
      data={pruebaArray}
      numColumns={2}
      keyExtractor={(e) => e.id}
      renderItem={({ item }) => <AlertCard content={item.content} id={item.id} fecha={item.fecha}/>}
      style={styles.mainView}
    />
  );
}

const styles = StyleSheet.create({
  mainView: {
    padding: 5,
  },
});
