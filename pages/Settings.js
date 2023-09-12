import { View,StyleSheet } from 'react-native';
import UserView from '../components/Settings/UserView'
import {Divider} from '@rneui/themed'
import SettingsList from '../components/Settings/SettingsList'
import {useTheme} from '@rneui/themed'
export default function Settings() {
    const { theme } = useTheme();
    const user = {
        name: 'Luis',
        mail: 'luis66850@gmail.com',
        image: "https://randomuser.me/api/portraits/men/36.jpg"
    }
    return(
        <View style={[styles.mainView,{backgroundColor: theme.colors.background}]}>
            <UserView user={user.name} image={user.image} mail={user.mail}/>
            <SettingsList></SettingsList>
        </View>
    )
};

const styles = StyleSheet.create({
    mainView:{
        flex:1,
    }
})
