import {
    Box,
    Flex,
    Text,
    Heading,
} from '@chakra-ui/react';
// import { useDispatch } from 'react-redux';


export default function Envelope({ letter, setCurrentId }) {
    // const dispatch = useDispatch();
    const date = new Date(letter.dateCreated);
    const dateStr = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

    return (
        <Box sx={styles.container}>
            <Flex sx={styles.inner}>
                <Text>
                    {dateStr}
                </Text>
                <Text>
                    Từ: {letter.from}
                </Text>
                <Heading as='h3' size='md'>
                    {letter.title}
                </Heading>
                <Text>
                    Đến: {letter.to}
                </Text>
            </Flex>
        </Box>
    )
}

const styles = {
    container: {
        w: '404px',
        h: '236px',
        bg: `repeating-linear-gradient(135deg,
            #2D4263 0, #2D4263 0.75rem,
            transparent 0.75rem, transparent 1.25rem,
             #C84B31 1.25rem, #C84B31 2rem,
             transparent 2rem, transparent 2.5rem)`,
        p: 1,
        mb: 8,
        cursor: 'pointer',
        _hover: {
            boxShadow: '0.5rem 0.5rem black',
            transform: 'translate(-0.5rem, -0.5rem)'
        }
    },
    inner: {
        w: '100%',
        h: '100%',
        bg: 'white',

        flexDirection: 'column',
        padding: 8,
        p: {
            mb: 4,
        },
        h3: {
            mb: 4,
        },
    }
}