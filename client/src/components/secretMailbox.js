import Envelope from './envelope';
import {
    CircularProgress,
    Flex,
    Text,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function SecretMailbox() {
    let letters = useSelector((state) => state.letters);
    letters = letters.filter(letter => letter.to === 'Ai đó đáng tin cậy');
    

    return (
        <Flex sx={styles.mailbox}>
            {!letters.length ? (
                <Flex direction='column' align='center'>
                    <Text mb='4'>Đang tải dữ liệu</Text>
                    <CircularProgress isIndeterminate />
                </Flex>
            ) : (
                letters.map((letter) => (
                    <Envelope key={letter._id} letter={letter} />
                ))
            )}
        </Flex>
    )
}

const styles = {
    mailbox: {
        minH: 'xl',
        bg: 'gray.50',
        py: 8,
        mx: 4,
        flex: 1,
        flexFlow: 'wrap',
        justifyContent: 'space-around',
    }
  }
  