import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {ThemeProvider,useTheme} from '@rneui/themed'
//LoginViews
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
//MainView
import MainScreen from "./TabBar/MainScreen";
//View for Edit Trusted Contacs
import TrustedEdit from "./pages/TrustedEdit";
//SettingsViews
import Account from "./pages/Account";
import Notifications from "./pages/Notifications";
import Theme from "./pages/Theme";
//Settings-Account
import ChangePassword from './pages/ChangePassword'
import DeleteAccount from './pages/DeleteAccount'
//CameraView
import CameraView from './pages/CameraView'
//CardView-Modal
import CardView from './pages/CardView'

export default function Engine() {
    const Stack = createNativeStackNavigator();
    const {theme} = useTheme();
    return(
        <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen name="MainScreen" component={MainScreen} />
            <Stack.Screen name="TrustedEdit" component={TrustedEdit} options={{ presentation: "modal" }} />
            <Stack.Screen name="CardView" component={CardView} options={{ presentation: "modal" }} />
          </Stack.Group>
          <Stack.Group screenOptions={{ headerShown: true, headerStyle:{backgroundColor: theme.colors.white} ,headerTitleStyle:{color:theme.colors.black}, headerTintColor: theme.colors.primary}}>
            <Stack.Screen name="Account" component={Account} options={{title:'Account Settings'}}/>
            <Stack.Screen name="Notifications" component={Notifications} options={{title:'Notifications Settings'}}/>
            <Stack.Screen name="Theme" component={Theme} options={{title:'Theme Settings'}}/>
            <Stack.Screen name="Camera" component={CameraView} options={{title:'Camera'}}/>
            <Stack.Screen name="DeleteAccount" component={DeleteAccount} options={{title:'Eliminar Cuenta'}}/>
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{title:'Cambiar Contraseña'}}/>
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    )
}