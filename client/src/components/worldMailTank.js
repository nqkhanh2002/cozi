import Envelope from './envelope';
import {
    Flex,
    CircularProgress
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

export default function WorldMailbox({ setCurrentId }) {
    const letters = useSelector((state) => state.letters);

    return (
        <Flex sx={styles.worldMailTank}>
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
    worldMailTank: {
        minH: 'xl',
        bg: 'gray.50',
        py: 8,
        mx: 4,
        flex: 1,
        flexFlow: 'wrap',
        justifyContent: 'space-around',
    }
  }
  