import Trusted from "../pages/Trusted";
import Home from "../pages/Home";
import Settings from '../pages/Settings';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "@rneui/themed";
import colors from '../components/assets/colors';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: true,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home-circle" : "home-circle-outline";
          } else if (route.name === "Trusted") {
            iconName = focused ? "contacts" : "contacts-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "cog" : "cog-outline";
          }
          return (
            <Icon
              name={iconName}
              size={size}
              type="material-community"
              color={color}
            />
          );
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Trusted" component={Trusted} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
}
