import {
    Flex,
    Link,
} from '@chakra-ui/react'

export default function Menu() {
    return (
        <Flex sx={styles.menu}>
            <Link href='#'>
                Bể thư thế giới
            </Link>
            <Link href='#'>
                Bể thư tâm tình
            </Link>
            <Link href='#'>
                Hộp thư đến
            </Link>
            <Link href='#'>
                Thư đã gửi
            </Link>
            <Link href='#'>
                Thư quan trọng
            </Link>
            <Link href='#'>
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