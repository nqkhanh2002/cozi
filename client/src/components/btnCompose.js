import {
    Button,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function BtnCompose() {
    return (
        <Link to='/compose'>
            <Button sx={styles.btnCompose}>
                Viết thư
            </Button>
        </Link>
    )
}

const styles = {
    btnCompose: {
        position: 'absolute',
        top: 72,
        right: 8,
        w: '96px',
        mb: 4,
        bg: 'airmailBlue',
        color: 'white',
        _hover: {
            color: 'black',
            bg: 'none',
            border: '2px solid',
            borderColor: 'airmailBlue',
        }
    }
}