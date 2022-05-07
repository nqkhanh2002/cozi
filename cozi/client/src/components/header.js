import {
    Flex,
    Link,
    Button,
} from '@chakra-ui/react';

import MobileDrawer from './mobileDrawer';

export default function Header() {
    return (
        <Flex as='nav' sx={styles.header}>
            <Link href='./'>
                COZI
            </Link>
            <Button
                sx={styles.btnSignIn}
            >
                Đăng nhập
            </Button>
            <MobileDrawer />
        </Flex>
    )
}

const styles = {
    header: {
        maxW: 'container.xl',
        mx: 'auto',
        p: 4,
        alignItems: 'center',
    },
    btnSignIn: {
        ml: 'auto',
        color: 'gray.900',
        bg: 'none',
        border: '2px solid',
        borderColor: 'blue.700',
        _hover: {
            color: 'white',
            bg: 'blue.700',
        }
    }
}