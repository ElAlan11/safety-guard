import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Button, Input, ThemeProvider, Stack, Form, InputGroup } from 'react-bootstrap';
import { NavigationContext } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class Register extends Component {
  static contextType = NavigationContext;
  constructor(props) {
    super(props);
    this.state = {
      email:'',
      password:'',
    };
  } 

  render() {
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
                                        name='name'
                                        size={24}
                                        color='#7c7c7c'
                                    />
                                </InputGroup.Text>
                                <Form.Control
                                placeholder="Nombre"
                                aria-label="Nombre"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <InputGroup className="mb-3">
                                <InputGroup.Text className='bg-white' id="basic-addon1">
                                    <Icon
                                        name='last_name'
                                        size={24}
                                        color='#7c7c7c'
                                    />
                                </InputGroup.Text>
                                <Form.Control
                                placeholder="Apellido"
                                aria-label="Apellido"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <InputGroup className="mb-3">
                                <InputGroup.Text className='bg-white' id="basic-addon1">
                                    <Icon
                                        name='last_name'
                                        size={24}
                                        color='#7c7c7c'
                                    />
                                </InputGroup.Text>
                                <Form.Control
                                placeholder="Teléfono"
                                aria-label="Telefono"
                                aria-describedby="basic-addon1"
                                type='tel'
                                />
                            </InputGroup>
                        </Form.Group>
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
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <InputGroup className="mb-3">
                                <InputGroup.Text id="basic-addon1" className='bg-white'>
                                    <Icon
                                        name='lock-confirm'
                                        size={24}
                                        color='#7c7c7c'
                                    />
                                </InputGroup.Text>
                                <Form.Control
                                placeholder="Confirma tu contrasena"
                                aria-label="password-confirm"
                                aria-describedby="basic-addon1"
                                type='password'
                                />
                            </InputGroup>
                        </Form.Group>                
                    </Form>
                    </Stack>
                    
                    <Button variant="secondary">Regístrarme</Button>

                    <a className='text-center w-100'>
                        <Form.Text className="text-muted" style={styles.link_type}>
                            ¿Ya tienes una cuenta?
                            <br />
                        </Form.Text>
                        <Form.Text style={styles.bold_font}>
                            Inicia sesión
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
      backgroundColor: '#fff',
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
        textDecoration: 'underline'
    },
    bold_font: {
        fontWeight: 'bold'
    },
    txt_right: {
        textAlign: "right",
        alignItems: "right"
    },
    forgot_password: {
        top: '-10px',
        textAlign: "right",
        alignItems: "right",
        cursor: "pointer",
        position: 'relative'
    }
  });