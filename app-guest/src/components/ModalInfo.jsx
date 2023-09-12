import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Text,
    Flex,
    Image,
    Stack
} from '@chakra-ui/react'

import superhero from '../assets/Superhero.png';

const ModalInfo = ({isOpen, onOpen, onClose}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'3xl'} scrollBehavior='inside'>
            <ModalOverlay />
            <ModalContent>
            <ModalHeader></ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Text 
                    fontSize={'lg'}
                    fontWeight={400}
                    my={4}
                >
                    <strong>SafetyGuard</strong> es una aplicación de seguridad innovadora y confiable que te brinda una tranquilidad instantánea en situaciones de emergencia. 
                    <br />
                    Con nuestro botón de pánico a solo un toque de distancia, nunca te sentirás solo/a o desprotegido/a en momentos críticos. 
                    <br />
                    Mantén la calma y confía en <strong>SafetyGuard</strong> para mantener tu seguridad y bienestar.
                </Text>
                <Flex>
                    <Stack>
                        <Image src={superhero}/>
                    </Stack>
                    <Stack>
                        <Text 
                            mb={4}
                            mt={2}
                        >
                            Con <strong>SafetyGuard</strong> puedes tener:
                        </Text>
                        <Text my={2} fontSize={'md'}>
                            <strong>1. Botón de pánico instantáneo:</strong> Presiona el botón de pánico y SafetyGuard alertará a tus contactos de emergencia de forma rápida y discreta. 
                            Ya sea que te encuentres en una situación de peligro o simplemente necesites asistencia urgente, nuestra aplicación estará ahí para ti.
                        </Text>
                        <Text my={2} fontSize={'md'}>
                            <strong>2. Localización en tiempo real:</strong> <strong>SafetyGuard</strong> utiliza tecnología de vanguardia para proporcionar a tus contactos de emergencia tu ubicación exacta en tiempo real. 
                            Esto permite una respuesta más rápida y precisa cuando más la necesitas.
                        </Text>
                    </Stack>
                </Flex>
                <Text my={2} fontSize={'md'}>
                    <strong>3. Configuración personalizada:</strong> Personaliza tu perfil de SafetyGuard con información médica relevante, contactos de emergencia y cualquier otra información importante. 
                    Esto garantiza que los servicios de emergencia y tus seres queridos sean informados adecuadamente en caso de una emergencia.
                </Text>
                <Text my={2} fontSize={'md'}>
                    <strong>4.  Asistencia 24/7:</strong> SafetyGuard está diseñado para estar disponible en todo momento. 
                    Ya sea de día o de noche, en cualquier lugar del mundo, puedes confiar en que la ayuda está a solo un toque de distancia.
                </Text>
                <Text my={2} fontSize={'md'}>
                    <strong>5.  Interfaz fácil de usar:</strong> Nuestra aplicación presenta una interfaz intuitiva y fácil de usar, lo que te permite acceder rápidamente al botón de pánico y otras funciones de seguridad. 
                    No importa tu nivel de experiencia tecnológica, SafetyGuard es accesible para todos.
                </Text>

                <Text my={6} fontSize={'lg'}>
                    SafetyGuard es la herramienta imprescindible para tu seguridad personal. 
                    Ya sea que estés caminando a casa tarde por la noche, saliendo a correr solo/a o viajando a lugares desconocidos, nuestra aplicación te brinda la confianza necesaria para enfrentar cualquier situación. 
                    Descarga SafetyGuard hoy mismo y mantén la tranquilidad en tus manos.
                </Text>
                <Text 
                    fontSize={'xl'}
                    fontWeight={600}
                    my={4}
                    textAlign={'center'}
                    textDecoration={'violet'}
                    stroke={'purple'}
                    textStroke='2px purple'
                    strokeWidth={2}
                    textShadow={'1px 1px 0 #9f7aea, -1px -1px 0 #9f7aea, 1px -1px 0 #9f7aea, -1px 1px 0 #9f7aea, 1px 1px 0 #9f7aea, 0 1px 0 #9f7aea, -1px 0 0 #9f7aea, 0 -1px 0 #9f7aea'}
                >
                    Tu seguridad es nuestra prioridad. 
                    <br />
                    SafetyGuard: Un toque, total protección.
                </Text>
            </ModalBody>

            <ModalFooter>
                <Button colorScheme='purple'>Descargar la app</Button>
            </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ModalInfo