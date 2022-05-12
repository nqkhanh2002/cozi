import Header from './header';
import {
    Flex,
    Box,
} from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import Menu from './menu';
import Footer from './footer';

export default function Layout() {
    const user = localStorage.getItem('profile');
    const { state } = useLocation();

    return (
        <>
            <Header />
            <Flex sx={styles.container}>
                <Outlet />
                {(state?.auth || user) && (
                    <Box sx={styles.menu}>
                        <Menu flex='1'/>
                    </Box>
                )}
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
            base: 'none',
            lg: 'block',
        },
    }
}