import SideBar from './SideBar';
import MenuDrawer from 'react-native-side-drawer';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { Stack, Col, Row } from 'react-bootstrap';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HeaderMenu({toggle,open, login}) {

    const drawerContent = () => {
        return (
            <SideBar toggle = {toggle} login = {login}/>
        );
    };
    return(                           
    <MenuDrawer
        open={open}
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
    )
};

const styles = StyleSheet.create({

    w_100: {
        width: "100%",
    },
    center: {
        textAlign: "center",
        alignItems: "center"
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
  });