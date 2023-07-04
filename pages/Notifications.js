import { View, StyleSheet } from "react-native";
import SettingsItem from "../components/Settings/SettingsItem";
export default function Notifications() {
  return (
    <View style={styles.mainView}>
      <SettingsItem type="idk" icon="visibility" />
      <SettingsItem type="idk" icon="visibility" />
      <SettingsItem type="idk" icon="visibility" />
    </View>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    paddingTop: 30
  },
});
