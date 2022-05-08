import Envelope from '../components/envelope';
import {
    Flex,
    CircularProgress
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function WorldMailbox({ setCurrentId }) {
    const letters = useSelector((state) => state.letters);
    console.log(letters);
    return (
        <Flex sx={styles.worldMailbox}>
            {!letters.length ?
                <CircularProgress mt='8' isIndeterminate />
            : (
                letters.map((letter) => (
                    <Envelope letter={letter} setCurrentId={setCurrentId} />
                ))
            )}
        </Flex>
    )
}

const styles = {
    worldMailbox: {
        minH: 'xl',
        bg: 'gray.50',
        py: 8,
        mx: 4,
        flex: 1,
        flexFlow: 'wrap',
        justifyContent: 'space-around',
    }
  }
  