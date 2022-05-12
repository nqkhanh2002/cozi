import {
    Box,
    Flex,
    Link,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <Box as='footer' sx={styles.footer}>
            <Flex sx={styles.container}>
                <a href='https://adventure2022.webdevstudios.org/'>
                    @Webdev Adventure 2022
                </a>
                <NavLink to='about'>
                    Về chúng tôi
                </NavLink>
                <Link href='#'>
                    Chính sách sử dụng
                </Link>
                <Link href='#'>
                    Chính sách bảo mật
                </Link>
                <Link href='#'>
                    Liên hệ
                </Link>
            </Flex>
        </Box>
    )
}

const styles = {
    footer: {
        color: 'white',
        bg: 'black',
        p: 16,
    },
    container: {
        maxW: 'container.xl',
        mx: 'auto',
        px: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: {
            base: 'column',
            lg: 'row',
        },
        p: {
            mb: 2,
        },
        a: {
            mb: 2,
        }
    }
}