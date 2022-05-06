import {
    Flex,
} from '@chakra-ui/react'
import Header from "./header"
import Footer from "./footer"
import Sidebar from "./sidebar"

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <Flex sx={styles.container}>
                <Sidebar flex='1' />
                {children}
            </Flex>
            <Footer />
        </>
    )
}

const styles = {
    container: {
        maxW: 'container.lg',
        mx: 'auto',
        my: 4,
    }
}