import { 
    Spinner,
    Container,
    Box,
    Stack,
    Text,
} from "@chakra-ui/react";
const Load = () => {
    return (
        <Container 
            maxW={'7xl'} 
            minH={'90vh'}
        >
            <Box 
                h='100%'
                textAlign={'center'}
                minHeight={'90vh'}
            >
                <Stack
                    justifyContent={'center'}
                    alignItems={'center'}
                    height={'100%'}
                    minHeight={'90vh'}
                >
                    <Spinner 
                        color="purple"
                        size={'lg'}
                        thickness='4px'
                    />
                    <Text>Cargando . . .</Text>
                </Stack>
            </Box>
        </Container>
    );
}

export default Load;