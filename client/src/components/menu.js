import {
    Flex,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Menu() {
    return (
        <Flex sx={styles.menu}>
            <Link to='home'>
                Bể thư thế giới
            </Link>
            <Link to='#'>
                Bể thư tâm tình
            </Link>
            <Link to='#'>
                Hộp thư đến
            </Link>
            <Link to='#'>
                Thư đã gửi
            </Link>
            <Link to='#'>
                Thư quan trọng
            </Link>
            <Link to='#'>
                Thư nháp
            </Link>
        </Flex>
    )
}

const styles = {
    menu: {
        w: '12rem',
        flexDirection: 'column',
        pl: {
            md: 8,
            lg: 16,
        },
        a: {
            mb: 4,
        }
    },
}