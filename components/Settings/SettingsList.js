
import {View } from "react-native";
import SettingsItem from '../Settings/SettingsItem'
export default function SettingsList() {
  return (
    <View >
      <SettingsItem icon='person' type="Cuenta" view="Account"/>
      <SettingsItem icon='shield' type="Notificationes" view="Notifications"/>
      <SettingsItem icon='palette' type="Tema" view="Theme"/>
    </View>
  );
}
