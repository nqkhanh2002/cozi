import {
    Box,
    Flex,
    Text,
    Heading,
} from '@chakra-ui/react'

export default function Envelope({ date, from, tittle, to }) {
    return (
        <Box sx={styles.container}>
            <Flex sx={styles.inner}>
                <Text>
                    {date}
                </Text>
                <Text>
                    Từ: {from}
                </Text>
                <Heading as='h3' size='md'>
                    {tittle}
                </Heading>
                <Text>
                    Đến: {to}
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