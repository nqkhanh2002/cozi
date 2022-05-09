import {
    Button,
    Flex,
    Heading,
    Text,
} from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';

export default function Reader() {
    const { state } = useLocation();
    const letter = state;

    return (
        <Flex sx={styles.container}>
            <Flex sx={styles.letter}>
                <Heading as='h1' size='lg' mb='8'>{letter.title}</Heading>
                <Text whiteSpace='pre-line'>{letter.body}</Text>
            </Flex>
            <Button mt='8' variant='filled'>Phản hồi</Button>
        </Flex>
    )
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-end',
        mx: 4,
    },
    letter: {
        fontFamily: 'Lora',
        w: 'full',
        p: 8,
        maxW: 'container.lg',
        mx: 'auto',
        bg: 'orange.100',
        flexDirection: 'column',
        boxShadow: 'xl',
    }
}