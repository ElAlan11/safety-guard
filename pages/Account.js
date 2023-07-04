import { View,Text,StyleSheet } from 'react-native'
import SettingsItem from '../components/Settings/SettingsItem'

export default function Account() {
    return(
        <View style={styles.mainView}>
            <SettingsItem type="Cambiar contraseña" icon="lock"/>
            <SettingsItem type="Cerrar sesión" icon="logout"/>
            <View style={styles.deleteF}>
                <SettingsItem type="Eliminar Cuenta" icon="delete-forever"/>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    mainView:
    {
        flex:1,
        paddingTop:30

    },
    deleteF:{
        paddingTop: 30
    }
})