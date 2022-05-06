import {
    Flex,
    Text,
    Heading,
} from '@chakra-ui/react'

export default function Envelope({ date, from, tittle, to }) {
    return (
        <Flex sx={styles.envelope}>
            <Text>
                Từ: {from}
            </Text>
            <Text>
                {date}
            </Text>
            <Heading as='h3' size='md'>
                {tittle}
            </Heading>
            <Text>
                Đến: {to}
            </Text>
        </Flex>
    )
}

const styles = {
    envelope: {
        w: '400px',
        h: '256px',
        mb: 8,
        border: '2px solid black',
        flexDirection: 'column',
        padding: 8,
        p: {
            mb: 4,
        },
        h3: {
            mb: 4,
        },
        _hover: {
            border: '4px solid black',
        },
    }
}