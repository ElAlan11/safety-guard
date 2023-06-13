import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Button, Input, ThemeProvider, Stack, Form, InputGroup, Col, Row } from 'react-bootstrap';
import { NavigationContext } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuDrawer from 'react-native-side-drawer';

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
    }

    const handleLogin = () => {
        const navigation_ = this.context;
        navigation_.navigate('Home', {});
    }

    const drawerContent = () => {
        return (
          <View style={styles.container_menu}>
            <Stack style={styles.bodyMenu}>
                <Row style={styles.w_100}>
                    <Col>
                        <TouchableOpacity onPress={toggle}>
                            <View>
                                <Icon
                                    name='close'
                                    size={24}
                                    color='#7c7c7c'
                                />
                            </View>
                        </TouchableOpacity>
                    </Col>
                    <Col>
                        <View style={styles.center}>
                            <Text>Logo</Text>
                            {/*<Image
                            style={styles.imgMenu}
                            source={require("./Imagenes/Recurso6.png")}></Image>*/}
                        </View>
                    </Col>
                    <Col></Col>
                </Row>
                <Row style={styles.row_menu}>
                    <TouchableOpacity onPress={this.info} style={styles.animatedBox}>
                        <Text style={styles.txt_menu}>
                            <Icon
                                name='account-group-outline'
                                size={26}
                                color='#7c7c7c'
                                style={styles.pr_1}
                            />
                            Contactos de confianza
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.toggleOpen} style={styles.animatedBox}>
                        <Text style={styles.txt_menu}>
                            <Icon
                                name='account-alert-outline'
                                size={26}
                                color='#7c7c7c'
                                style={styles.pr_1}
                            />
                            Mis alertas
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this._cerrar} style={styles.animatedBox}>
                        <Text style={styles.txt_menu}>
                            <Icon
                                name='exit-to-app'
                                size={24}
                                color='#7c7c7c'
                                style={styles.pr_1}
                            />

                            Cerrar Sesion
                        </Text>
                    </TouchableOpacity>
                </Row>
            </Stack>
          </View>
        );
    };

    const toggle = () => {
        this.setState({ open: !this.state.open });
    };

    const handlePressHelp = () => {
        this.setState({ open: !this.state.open });
    };

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <div style={styles.content}>
                <Stack>
                    <MenuDrawer
                        open={this.state.open}
                        drawerContent={drawerContent()}
                        drawerPercentage={100}
                        animationTime={250}
                        overlay={true}
                        opacity={0.9}
                        onClose={toggle}
                    >
                        <Stack style={styles.body}>
                            <Row style={styles.w_100}>
                                <Col>
                                    <TouchableOpacity onPress={toggle}>
                                        <View>
                                            <Icon
                                                name='menu'
                                                size={24}
                                                color='#7c7c7c'
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <View style={styles.center}>
                                        <Text>Logo</Text>
                                        {/*<Image
                                        style={styles.imgMenu}
                                        source={require("./Imagenes/Recurso6.png")}></Image>*/}
                                    </View>
                                </Col>
                                <Col></Col>
                            </Row>
                        </Stack>
                        {/*<Button style={styles.btn_lg} type="outline"
                            title=" Refresh"
                            color="white"
                            onPress={this.reload}
                        />		*/}
                    </MenuDrawer>
                </Stack>
                <div style={styles.container}>
                    <Stack style={styles.containerBtn}>
                        <Row style={styles.w_100} height="50%">
                            <TouchableOpacity onPress={handlePressHelp} opacity={0.8}>
                                <Button
                                    style={styles.btnHelp}
                                >
                                    <Icon
                                        name='shield-alert'
                                        size={130}
                                        color='white'
                                    />
                                </Button>
                            </TouchableOpacity>
                    </Row>
                    </Stack>
                </div>
            </div>
        </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
    content:{
        width: "100%",
        height: "auto",
        minHeight: "100vh",
    },
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#ded7d7",
      //height: "100%",
      minHeight: "92.2vh",
      textAlign: "-webkit-center"
    },
    pr_1:{
        paddingRight: "1rem",
    },
    w_100: {
        width: "100%",
    },
    center: {
        textAlign: "center",
        alignItems: "center"
    },
    link_type:{
        cursor: "pointer",
        textDecorationLine: "underline",
    },
    bold_font: {
        fontWeight: "bold"
    },
    container_menu: {
        flex: 1,
        backgroundColor: '#112146f2',
        justifyContent: 'center',
        height: "100%",
        width: "100vw",
        zIndex: 10,
    },
    txt_menu: {
        color: "#7c7c7c",
        fontWeight: "400",
        fontSize: "12pt",
        paddingLeft: "15px",
        paddingTop: "15px",
        paddingBottom: "15px",
    },
    animatedBox: {
        //borderBottomColor: "#BABABA",
        //borderBottomWidth: "2px",
        padding: 0,
        alignContent: "center",
        justifyContent: "center",
    },
    body: {
        //flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: 'start',
        backgroundColor: '#ffffff',
        paddingTop: "20px",
        paddingBottom: "20px",
        boxShadow: "black 2px 1px 9px 0px",
    },
    bodyMenu: {
        //flex: 1,
        width: "100%",
        alignItems: "center",
        justifyContent: 'start',
        backgroundColor: '#ffffff',
        paddingTop: "20px",
        paddingBottom: "20px",
    },
    mt_2: {
        marginTop: "2rem",
    },
    row_menu: {
        marginTop: "2rem",
        width: "100%",
    },
    btnHelp: {
        width: "70%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        borderColor: "red",
        boxShadow: "black 2px 1px 9px 0px",
        borderRadius: "50%",
        padding: "50px",
        margin: "auto",
        fontWeight: "bold",
        color: "white",
        boxShadow: "inset 4px 3px 3px rgba(255,255,255,.7)",
    },
    containerBtn: {
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        position: "sticky",
        top: "35%",
    },
    textHelp: {
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "4rem",
    }

  });