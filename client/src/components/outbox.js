import Envelope from './envelope';
import {
    Flex,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function Outbox() {
    let letters = useSelector((state) => state.letters);
    let user = JSON.parse(localStorage.getItem('profile'));
    letters = letters.filter(letter => letter.sender === user?.result?._id);

    return (
        <Flex sx={styles.mailbox}>
            {letters.map((letter) => (
                <Envelope key={letter._id} letter={letter} />
            ))}
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
  