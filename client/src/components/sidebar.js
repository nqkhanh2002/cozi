import {
    Flex,
    Button,
    Link,
} from '@chakra-ui/react'

export default function Sidebar() {
    return (
        <Flex sx={styles.sidebar}>
            <Button sx={styles.btnCompose}>
                Viết thư
            </Button> 
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
    sidebar: {
        w: '160px',
        flexDirection: 'column',
        a: {
            mb: 4,
        }
    },
    btnCompose: {
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