import { Outlet } from 'react-router-dom'
import {
    Flex,
    Box,
} from '@chakra-ui/react'
import Header from "./header"
import Footer from "./footer"
import Menu from "./menu"

export default function Layout() {
    return (
        <>
            <Header />
            <Flex sx={styles.container}>
                <Outlet />
                <Box sx={styles.menu}>
                    <Menu flex='1'/>
                </Box>
            </Flex>
            <Footer />
        </>
    )
}

const styles = {
    container: {
        minH: 'xl',
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