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
        py: 16,
    },
    container: {
        maxW: 'container.xl',
        mx: 'auto',
        px: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: {
            sm: 'column',
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