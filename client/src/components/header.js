import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    Flex,
    Image,
    Tooltip,
    Text,
    Avatar,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';
import CoziLogo from '../assets/CoziLogo.png';
import MobileDrawer from './mobileDrawer';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useNavigate, useLocation } from 'react-router-dom';
import decode from 'jwt-decode';

export default function Header() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const logOut = () => {
        dispatch({
            type: 'LOGOUT'
        });
        navigate('/');
        setUser(null);
    }

    const location = useLocation();
    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            
            if (decodedToken.exp * 1000 < new Date().getTime())
                logOut();
        }
        setUser(JSON.parse(localStorage.getItem('profile')));
    }, [location]);

    return (
        <Flex as='nav' sx={styles.header}>
            <Link to='/'>
                <Image h={16} src={CoziLogo} />
            </Link>
            
            {user ? (
                <Flex ml='auto' align='center'>
                    <Tooltip label='Điểm tin cậy'>
                        <Flex>
                            <FaHeart size={26} color='#C84B31' />
                            <Text ml='2'>{user.result.coziPoints}</Text>
                        </Flex>
                    </Tooltip>
                    <Menu>
                        <MenuButton>
                            <Avatar ml={8} name={user.result.name} src='' />
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={logOut}>Đăng xuất</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
            ) : (
                <Flex ml='auto'>
                    <Link to='auth'>
                        <Button sx={styles.btnSignIn}>
                            Đăng nhập
                        </Button>
                    </Link>
                </Flex>
            )}
            
            {user && <MobileDrawer />}
        </Flex>
    )
}

const styles = {
    header: {
        maxW: 'container.xl',
        mx: 'auto',
        p: 2,
        alignItems: 'center',
        position: 'sticky',
        top: 0,
        zIndex: '1',
        bg: 'white',
    },
    btnSignIn: {
        w: '128px',
        color: 'gray.900',
        bg: 'none',
        border: '2px solid',
        borderColor: 'blue.700',
        _hover: {
            color: 'white',
            bg: 'blue.700',
        }
    },
}