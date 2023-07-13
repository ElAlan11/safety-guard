import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import {Avatar,useTheme} from '@rneui/themed'
import colors from '../assets/colors'

export default function UserView({user, mail, image}) {
    const {theme} = useTheme();
    return(
        <>
    <View style={styles.mainView}>
        <View>
            <Avatar rounded source={{uri: image}} size={70}/>
        </View>
        <View style={styles.textView}>
            <Text style={[styles.user,{color: theme.colors.black}]}>
                {user}
            </Text>
            <Text style={[styles.mail,{color: theme.colors.grey2}]}>
                {mail}
            </Text>
        </View>
    </View>
        <TouchableOpacity style={styles.editBtn}><Text style={{color:colors.primary,fontSize:17}}>Editar</Text></TouchableOpacity>
    </>
    )
}

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        padding: 15,
        paddingBottom: 5
    },
    textView: {
        justifyContent: 'center',
        paddingLeft: 10
    },
    editBtn:{
        margin:15,
        marginTop: 0,
        width: 70,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center'
    },
    user: {
        fontWeight:'600',
        fontSize:18
    },
    mail:{
        fontSize: 14,
        color:'gray'
    }
})