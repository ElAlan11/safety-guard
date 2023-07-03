
import {View } from "react-native";
import SettingsItem from '../Settings/SettingsItem'
export default function SettingsList() {
  return (
    <View >
      <SettingsItem icon='person' type="Account" view="Account"/>
      <SettingsItem icon='shield' type="Privacy" view="Privacy"/>
      <SettingsItem icon='palette' type="Theme" view="Theme"/>
    </View>
  );
}
