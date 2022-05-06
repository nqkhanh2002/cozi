import {
    Flex,
    Link,
    Button,
} from '@chakra-ui/react'

export default function Header() {
    return (
        <Flex as='nav' sx={styles.header}>
            <Link href='./'>
                COZI
            </Link>
            <Button sx={styles.btnSignIn}>
                Đăng nhập
            </Button> 
        </Flex>
    )
}

const styles = {
    header: {
        maxW: 'container.lg',
        mx: 'auto',
        my: 4,
        alignItems: 'center',
    },
    btnSignIn: {
        ml: 'auto',
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