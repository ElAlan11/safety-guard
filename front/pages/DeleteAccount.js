import { View, StyleSheet,Text } from "react-native";
import {Button,makeStyles} from '@rneui/themed'

export default function DeleteAccount() {
  const styles = useStyles();
  return (
    <View style={styles.mainView}>
      <Text style={styles.mainFont}>¿Estas seguro de querer eliminar tu cuenta? Una vez eliminada 
        <Text style={{fontWeight: 'bold',textTransform: 'uppercase'}}> no podra ser recuperada </Text> 
      </Text>
      <Button title="Eliminar Cuenta" type="clear" titleStyle={styles.delete}></Button>
    </View>
  );
}

const useStyles = makeStyles((theme)=>({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
    backgroundColor: theme.colors.background
  },
  mainFont:{
    color: theme.colors.grey2,
    paddingBottom: 20,
    
  },
  delete:{
    color: theme.colors.error
  }
}));
