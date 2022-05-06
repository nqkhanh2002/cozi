import {
    Box,
    Flex,
    Text,
    Link,
} from '@chakra-ui/react'

export default function Footer() {
    return (
        <Box as='footer' sx={styles.footer}>
            <Flex sx={styles.container}>
                <Text>
                    @Webdev Adventure 2022
                </Text>
                <Link href='#'>
                    Về chúng tôi
                </Link>
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
        py: 8,
    },
    container: {
        maxW: 'container.lg',
        mx: 'auto',
        justifyContent: 'space-between',
    }
}