import { View,StyleSheet } from 'react-native';
import UserView from '../components/Settings/UserView'
import {Divider} from '@rneui/themed'
import SettingsList from '../components/Settings/SettingsList'
export default function Settings() {
    const user = {
        name: 'Luis',
        mail: 'luis66850@gmail.com',
        image: "https://randomuser.me/api/portraits/men/36.jpg"
    }
    return(
        <View style={styles.mainView}>
            <UserView user={user.name} image={user.image} mail={user.mail}/>
            <Divider/>
            <SettingsList></SettingsList>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView:{
        flex:1,
    }
})
