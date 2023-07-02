import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import TrustedEdit from "./pages/TrustedEdit";
import MainScreen from "./TabBar/MainScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="TrustedEdit" component={TrustedEdit} options={{presentation: 'modal'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
