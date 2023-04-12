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
                                placeholder="Contrasena"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                                />
                            </InputGroup>
                            <a className='text-right w-100'>
                                <Form.Text className="text-muted">
                                    ¿Haz olvidado tu contraseña?
                                </Form.Text>
                            </a>
                        </Form.Group>
                    </Form>
                    
                    <Button variant="secondary">Iniciar Sesión</Button>
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
    }
  });