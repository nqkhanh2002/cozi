import {
    Flex,
    Box,
} from '@chakra-ui/react'
import Header from "./header"
import Footer from "./footer"
import Menu from "./menu"
import BtnCompose from './btnCompose'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Flex sx={styles.container}>
                {children}
                <Box sx={styles.menu}>
                    <Menu flex='1'/>
                </Box>
                {/* <BtnCompose /> */}
            </Flex>
            <Footer />
        </>
    )
}

const styles = {
    container: {
        position: 'relative',
        maxW: 'container.xl',
        mx: 'auto',
        py: 8,
    },
    menu: {
        display: {
            sm: 'none',
            lg: 'block',
        },
    }
}