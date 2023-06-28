import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { ThemeProvider } from "react-bootstrap";
import HeaderMenu from "../components/Home/HeaderMenu.js";
import BtnContainer from "../components/Home/BtnContainer.js";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  render() {
    const toggle = () => {
      this.setState({ open: !this.state.open });
    };

    return (
      <ThemeProvider breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]} minBreakpoint="xxs">
        <div style={styles.header}>
          <HeaderMenu open={this.state.open} toggle={toggle} />
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
