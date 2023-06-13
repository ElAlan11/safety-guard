import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Input, ThemeProvider, Stack, Form, InputGroup } from 'react-bootstrap';
import { NavigationContext } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Login extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
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
    }

    const handleLogin = () => {
        const navigation_ = this.context;
        navigation_.navigate('Home', {});
    }

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
            minBreakpoint="xxs"
        >
            <div style={styles.container}>
                <Stack direction="vertical" style={styles.center}>
                    <Text>Logo</Text>
                </Stack>
                <Stack className='pt-5' direction="vertical" gap={3} style={styles.content_form}>
                    <Stack style={styles.content_form}>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                        <InputGroup className="mb-3">
                            <InputGroup.Text className='bg-white' id="basic-addon1">
                                <Icon
                                    name='email'
                                    size={24}
                                    color='#7c7c7c'
                                />
                            </InputGroup.Text>
                            <Form.Control
                            placeholder="Usuario"
                            aria-label="Usuario"
                            aria-describedby="basic-addon1"
                            type='email'
                            />
                        </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1" className='bg-white'>
                                    <Icon
                                        name='lock'
                                        size={24}
                                        color='#7c7c7c'
                                    />
                                </InputGroup.Text>
                                <Form.Control
                                placeholder="Contraseña"
                                aria-label="password"
                                aria-describedby="basic-addon1"
                                type='password'
                                />
                            </InputGroup>
                        </Form.Group>                
                    </Form>
                    <a className='text-right w-100' style={styles.forgot_password} onClick={(e) => {e.preventDefault(); handleChangeView('ForgotPassword')}}>
                        <Form.Text className="text-muted">
                            ¿Haz olvidado tu contraseña?
                        </Form.Text>
                    </a>
                    </Stack>
                    
                    <Button variant="secondary" onClick={handleLogin}>Iniciar Sesión</Button>

                    <a className='text-center w-100' onClick={(e) => {e.preventDefault(); handleChangeView('Register')}}>
                        <Form.Text className="text-muted" style={styles.link_type}>
                            ¿Aún no tienes una cuenta?
                            <br />
                        </Form.Text>
                        <Form.Text style={styles.bold_font}>
                            Regístrate
                        </Form.Text>
                    </a>                            
                </Stack>
            </div>
        </ThemeProvider>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 24,
      backgroundColor: "#fff",
    },
    center: {
        textAlign: "center",
        alignItems: "center"
    },
    content_form: {
        height: "70%",
        justifyContent: "center",
        margin: "3rem 0rem",
    },
    link_type:{
        cursor: "pointer",
        textDecorationLine: "underline",
    },
    bold_font: {
        fontWeight: "bold"
    },
    txt_right: {
        textAlign: "right",
        alignItems: "right"
    },
    forgot_password: {
        top: "-10px",
        textAlign: "right",
        alignItems: "right",
        cursor: "pointer",
        position: "relative"
    }
  });