import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider, Stack } from "react-bootstrap";
import { NavigationContext } from "@react-navigation/native";
import HeaderMenu from "../components/Home/HeaderMenu.js";
import BtnContainer from "../components/Home/BtnContainer.js";

export default class Home extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    const handleChangeView = (view) => {
      const navigation_ = this.context;
      navigation_.navigate(view, {});
    };

    const handleLogin = () => {
      const navigation_ = this.context;
      navigation_.navigate("Home", {});
    };

    const toggle = () => {
      this.setState({ open: !this.state.open });
    };

    const handlePressHelp = () => {
      this.setState({ open: !this.state.open });
    };

    return (
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <div style={styles.header}>
          <HeaderMenu toggle={toggle} open={this.state.open} />
        </div>
        <div style={styles.container}>
          <BtnContainer toggle={toggle} />
        </div>
      </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: "auto",
  },
  container: {
    display: "flex",
    backgroundColor: "red",
    height: "100%",
    width: "100%",
    flexDirection: "column",
  },
});
