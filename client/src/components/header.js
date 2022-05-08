import {
    Flex,
    Link,
    Button,
} from '@chakra-ui/react';
import logo from '../images/wda-logo.png';
import MobileDrawer from './mobileDrawer';
import '../App.css';
export default function Header() {
    return (
        <Flex as='nav' sx={styles.header}>
            <Link href='./'>
            <img style={{width:200,height:100}} src={logo} alt={"logo"}/> 
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