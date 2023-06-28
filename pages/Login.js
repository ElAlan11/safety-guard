import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "react-bootstrap";
import LoginForm from "../components/Login/LoginForm.js";
import colors from '../components/assets/colors.js'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  render() {
    return (
      <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">
        <div style={styles.container}>
          <div style={styles.container1}>
            <LoginForm />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 30,
    backgroundColor: colors.primary,
  },
  container1: {
    flex: 1,
    backgroundColor: colors.blured,
    borderRadius: 10,
  },
});
