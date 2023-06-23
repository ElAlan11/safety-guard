import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Button, Input, ThemeProvider, Stack, Form, InputGroup } from "react-bootstrap";
import { NavigationContext } from "@react-navigation/native";
import LoginForm from "../components/Login/LoginForm.js";

export default class Login extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  _handleCheck = async () => {
    const navigation_ = this.context;
    /*const data_session = await AsyncStorage.getItem('elementos');
    if(data_session == null){
      return;
    } else{
      let data = JSON.parse(data_session);
      console.log(data[0]);
      navigation1.navigate('Home', {});
    }*/
  };

  render() {
    const handleChangeView = (view) => {
      const navigation_ = this.context;
      navigation_.navigate(view, {});
    };

    const handleLogin = () => {
      const navigation_ = this.context;
      navigation_.navigate("Home", {});
    };
    const handleRegister = () => {
        const navigation_ = this.context;
        navigation_.navigate("Register", {});
      };
      const handlePassword = () => {
        const navigation_ = this.context;
        navigation_.navigate("ForgotPassword", {});
      };

    return (
      <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">
        <div style={styles.container}>
            <div style={styles.container1}>
                <LoginForm login={handleLogin} register={handleRegister} password={handlePassword} />
            </div>
        </div>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection:'row',
    alignItems: 'center',
    padding: 30,
    backgroundColor: 'rgb(77,64,122)'
  },
  container1: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,.6)',
    borderRadius: 10,
}
});
