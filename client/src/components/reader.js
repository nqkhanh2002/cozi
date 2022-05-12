import {
    Button,
    Flex,
    Heading,
    Text,
} from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Reader() {
    const { state } = useLocation();
    const letter = state;

    const user = JSON.parse(localStorage.getItem('profile'));

    const navigate = useNavigate();
    const handleReply = () => {
        navigate('/edit', {state: { receiverId: letter.sender, receiverName: letter.from, letter: null }});
    }

    return (
        <Flex sx={styles.container}>
            <Flex sx={styles.letter}>
                <Heading as='h1' size='lg' mb='8'>{letter.title}</Heading>
                <Text whiteSpace='pre-line'>{letter.body}</Text>
            </Flex>
            {user && (user.result._id !== letter.sender) && (
                <Button mt='8' variant='filled' onClick={handleReply}>Phản hồi</Button>
            )}
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